class CheckoutProgress extends PureComponent {
  constructor(props) {
    super(props);

    this.state = { value: 0 };

    this.stepMapArr = Object.keys(this.props.stepMap);
  }

  componentDidUpdate() {
    this.setState({ value: 100 });
  }

  getStepNumber(checkoutStep) {
    return this.stepMapArr.findIndex((el) => el === checkoutStep);
  }

  circleSymbol(checkoutStep, count) {
    if (this.getStepNumber(checkoutStep) < count) {
      return count;
    }
    return <>&#10003;</>;
  }

  renderCheckOutProgress(checkoutStep, stepMap) {
    const stepArr = [];
    let count = 1;

    const progressBlock = (step, checkoutStep, stepMap, count) => {
      console.log(this.stepMapArr.length, this.getStepNumber(checkoutStep));

      if (count > this.getStepNumber(checkoutStep) + 1) {
        return (
          <>
            <div className="line"></div>
            {this.stepMapArr.length !== count && (
              <div className="checkBox">
                <div className="circle">
                  <div className="circleSymbol_gray">
                    {this.circleSymbol(checkoutStep, count)}
                  </div>
                </div>
                <div className="checkBoxTitle_gray">{stepMap[step].title}</div>
              </div>
            )}
          </>
        );
      }

      return (
        <>
          <div className="line">
            {this.getStepNumber(checkoutStep) === count - 1 && (
              <div
                style={
                  count === 1
                    ? { width: `100%` }
                    : { width: `${this.state.value}%` }
                }
                className="progressAnimated"
              ></div>
            )}
            {this.getStepNumber(checkoutStep) !== count - 1 && (
              <div className="progress"></div>
            )}
          </div>
          {this.stepMapArr.length !== count && (
            <div className="checkBox">
              <div className="circle_red">
                <div className="circleSymbol">
                  {this.circleSymbol(checkoutStep, count)}
                </div>
              </div>
              <div className="checkBoxTitle_gray">{stepMap[step].title}</div>
            </div>
          )}
        </>
      );
    };

    for (let step in stepMap) {
      stepArr.push(progressBlock(step, checkoutStep, stepMap, count));
      count++;
    }

    return <div className="checkOutProgressContainer">{stepArr}</div>;
  }

  render() {
    return this.renderCheckOutProgress(
      this.props.checkoutStep,
      this.props.stepMap
    );
  }
}

export default CheckoutProgress;
