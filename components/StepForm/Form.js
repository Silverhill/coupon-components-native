import React, { Component } from 'react';
import PropTypes from 'prop-types';
import StepForm from './StepForm';

export default class Form extends Component {
  state = {
    currentStep: {},
    currentIndex: 0,
    form: {},
  }

  nextIndex = async () => {
    const { currentIndex: previousIndex } = this.state;
    const { steps, onChange } = this.props;

    await this.setState(state => ({ currentIndex: state.currentIndex + 1 }));
    const { currentIndex } = this.state
    if(onChange) onChange({ previousStep: steps[previousIndex], currentStep: steps[currentIndex] })
  }

  backIndex = async () => {
    const { currentIndex: previousIndex } = this.state;
    const { steps, onChange } = this.props;

    await this.setState(state => ({ currentIndex: state.currentIndex - 1 }));
    const { currentIndex } = this.state
    if(onChange) onChange({ previousStep: steps[previousIndex], currentStep: steps[currentIndex] })
  }

  setCurrentForm = (text, name) => {
    this.setState(state => ({
      form: {
        ...state.form,
        [name]: text,
      }
    }));
  }

  getTrimedForm = (form) => {
    let newForm = {}
    Object.keys(form).map((keyForm) => {
      newForm = {
        ...newForm,
        [keyForm]: String(form[keyForm]).trim(),
      };
    });

    return newForm;
  }

  _renderStep = (currentStep) => {
    const { steps, onSubmit } = this.props;
    const { form } = this.state;
    if(!steps.length) return;

    let handleCurrentIndex = () => this.nextIndex();
    const totalSteps = steps.length;

    if(currentStep.id === (totalSteps - 1)) {
      handleCurrentIndex = () => {
        if(onSubmit) onSubmit(this.getTrimedForm(form));
      }
    }

    let backButton;
    if(currentStep.id > 0) {
      backButton = true;
    }

    currentStep.name = currentStep.name || 'no-name';
    return(
      <StepForm
        title={currentStep.title}
        description={currentStep.description}
        button={{
          onPress: handleCurrentIndex,
          disabled: !form[currentStep.name],
          ...currentStep.button,
        }}
        onBack={currentStep.id > 0 && this.backIndex}
        input={{
          secureTextEntry: false,
          value: form[currentStep.name],
          onChangeText: (text) => this.setCurrentForm(text, currentStep.name),
          ...currentStep.input,
        }}
      />
    );
  }

  render() {
    const { steps } = this.props;
    const { currentIndex } = this.state;

    return(this._renderStep(steps[currentIndex]));
  }
}

Form.defaultProps = {
  currentIndex: 0,
  steps: [],
};

Form.propTypes = {
  steps: PropTypes.array,
  onSubmit: PropTypes.func,
  onChange: PropTypes.func,
}