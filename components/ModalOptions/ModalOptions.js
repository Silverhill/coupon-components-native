import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet, Modal, TouchableOpacity } from 'react-native'
import { Button, Typo } from 'coupon-components-native'
import { Palette } from 'coupon-components-native/styles'
import ActionSheetOption from './ActionSheetOption';

class ModalOptions extends Component {

  closeModal = e => {
    const { onCloseRequest } = this.props;
    if(onCloseRequest) onCloseRequest(e);
  }

  handlerClickOption = (option, e) => {
    const { onClickOption } = this.props;
    if(onClickOption) onClickOption(option, e);
  }

  render () {
    const {
      animationType,
      transparent,
      isOpen,
      children,
      opacity,
      options,
      cancelLabel,
    } = this.props

    const bgOpacity = { backgroundColor: Palette.dark.alpha(0.5).css() }

    return (
      <Modal
        visible={isOpen}
        animationType={animationType}
        transparent={transparent}>

        <TouchableOpacity
          style={[styles.root, bgOpacity]}
          onPress={this.closeModal}
          activeOpacity={1}
        >
          <View style={styles.optionsContainer}>
            {options &&
              (options || []).map((option, i) => {
                return (
                  <ActionSheetOption
                    key={`option-${option.id || i}`}
                    onPress={e => this.handlerClickOption(option, e)}
                    label={option.label || `Option ${i}`}
                  />
                )
              })
            }
            <ActionSheetOption
              onPress={this.closeModal}
              label={cancelLabel}
              cancel
            />
          </View>
        </TouchableOpacity>
      </Modal>
    )
  }
}

ModalOptions.defaultProps = {
  isOpen: false,
  animationType: 'fade',
  transparent: true,
  opacity: 0.2
}

ModalOptions.propTypes = {
  isOpen: PropTypes.bool,
  animationType: PropTypes.oneOf(['fade', 'slide', 'node']),
  transparent: PropTypes.bool,
  opacity: PropTypes.number,
  onCloseRequest: PropTypes.func,
  children: PropTypes.any,
  onClickOption: PropTypes.func,
  options: PropTypes.arrayOf(PropTypes.shape({
    label:  PropTypes.oneOfType([PropTypes.string, PropTypes.node]),
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
  }))
}

const styles = StyleSheet.flatten({
  root: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    padding: 20,
  },

  optionsContainer: {
    alignSelf: 'stretch',
    marginBottom: 10,
  },

  options: {
    flexDirection: 'column',
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
    backgroundColor: Palette.white,
    padding: 10,
    borderRadius: 5,
  },

  buttonCancel: {

  },
  text: {
    color: 'red'
  }
})

export default ModalOptions
