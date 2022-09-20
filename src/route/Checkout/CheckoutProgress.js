class CheckoutProgress extends PureComponent {
  constructor(props) {
    super(props);

    this.stepMapArr = Object.keys(this.props.stepMap);
  }

  getStepId(checkoutStep) {
    return this.stepMapArr.findIndex((el) => el === checkoutStep);
  }

  circleSymbol(checkoutStep, blockId) {
    if (this.getStepId(checkoutStep) < blockId) {
      return blockId;
    }
    return <>&#10003;</>;
  }

  renderCheckOutProgress(checkoutStep, stepMap) {
    const stepArr = [];
    let blockId = 1;

    const progressBlock = (step, checkoutStep, stepMap, blockId) => {
      if (blockId > this.getStepId(checkoutStep) + 1) {
        return (
          <>
            <div className="line"></div>
            {this.stepMapArr.length !== blockId && (
              <div className="checkBox">
                <div className="circle">
                  <div className="circleSymbol_gray">
                    {this.circleSymbol(checkoutStep, blockId)}
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
            {this.getStepId(checkoutStep) + 1 === blockId && (
              <div className="progressAnimated"></div>
            )}

            {this.getStepId(checkoutStep) + 1 > blockId && (
              <div className="progress"></div>
            )}
          </div>
          {this.stepMapArr.length !== blockId && (
            <div className="checkBox">
              <div className="circle_red">
                <div className="circleSymbol">
                  {this.circleSymbol(checkoutStep, blockId)}
                </div>
              </div>
              <div className="checkBoxTitle">{stepMap[step].title}</div>
            </div>
          )}
        </>
      );
    };

    for (let step in stepMap) {
      stepArr.push(progressBlock(step, checkoutStep, stepMap, blockId));
      blockId++;
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
