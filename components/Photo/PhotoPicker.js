import React, { Component } from 'react';
import { View, Text, ImageBackground, Alert, TouchableOpacity } from 'react-native';
import styled, { css } from 'styled-components/native';
import { Ionicons } from '@expo/vector-icons';
import { ImagePicker } from 'expo';
import uuid from 'uuid';
import { ModalOptions } from '../index';
import { Palette } from '../../styles';

const Preview = styled(TouchableOpacity)`
  border-radius: 5;
  ${props => props.width && css`
    width: ${({ width }) => width};
  `}
  ${props => props.height && css`
    height: ${({ height }) => height};
  `}
  background-color: ${({ bgColor }) => bgColor ? bgColor : Palette.neutralLight };
  justify-content: center;
  align-items: center;
  overflow: visible;
`

const Container = styled(View)`
  overflow: visible;
  position: relative;
`;

const ImagePreview = styled(ImageBackground)`
  border-radius: 5;
  width: ${({ width }) => width ? width : 200 };
  height: ${({ height }) => height ? height : 200 };
  flex: 1;
  justify-content: flex-end;
  align-items: flex-end;
  padding-right: 10;
  padding-bottom: 6;
`;

const IconContent = styled(View)`
  ${props => !props.width && !props.height && css`
    position: absolute;
  `}
  background-color: ${Palette.secondaryAccent};
  bottom: 0;
  right: 0;
  width: 25;
  height: 25;
  border-radius: 30;
  justify-content: center;
  align-items: center;
`;

const IconPhoto = styled(Ionicons)`
  color: ${Palette.neutralLight};
`;

const options = [
  {label: 'Take a Photo', id: uuid.v4()},
  {label: 'Pick a Photo', id: uuid.v4()},
]

export default class PhotoPicker extends Component {
  state = {
    image: null,
    cameraIsOpen: false,
    isModalOpen: false
  }

  _setModalVisible = visible => {
    this.setState({isModalOpen: visible});
  }

  _takePhoto = async() => {
    const { hasPersmissions } = this.state;
    const result = await ImagePicker.launchCameraAsync({
      allowsEditing: true,
      aspect: [4, 3]
    });

    this.conditionImageState(result)
  }

  _pickPhoto = async() => {
    const result = await ImagePicker.launchImageLibraryAsync({
      allowsEditing: true,
      aspect: [4, 3]
    });

    this.conditionImageState(result)
  }

  conditionImageState = result => {
    const { onPickerImage } = this.props;
    if(!result.cancelled) {
      if(onPickerImage) onPickerImage(result);
      this.setState({ image: result.uri, isModalOpen: false });
    }
  };

  requestOption = (option) => {
    this._setModalVisible(false);

    if(option.id === options[0]['id']) {
      this._takePhoto();
    }
    if(option.id === options[1]['id']) {
      this._pickPhoto()
    }
  }

  render () {
    const { image, isModalOpen } = this.state;
    const { width, height, cancelLabel, children = null } = this.props;

    let sizeProps;
    if(width && height) {
      sizeProps = {
        width, height
      };
    }

    const IcoPhoto = (
      <IconContent {...sizeProps}>
        <IconPhoto
          name='md-camera'
          size={15}
        />
      </IconContent>
    );

    return (
      <Preview
        {...sizeProps}
        onPress={() => this._setModalVisible(true)}>
        <Container>
          {children}
          {!children && image &&
            <ImagePreview source={{uri: image}} {...sizeProps}>
              {IcoPhoto}
            </ImagePreview>
          }
          {IcoPhoto}
        </Container>
        <ModalOptions
          isOpen={isModalOpen}
          options={options}
          onClickOption={this.requestOption}
          cancelLabel={cancelLabel}
          onCloseRequest={() => this._setModalVisible(false)}
        />
      </Preview>
    )
  }
}