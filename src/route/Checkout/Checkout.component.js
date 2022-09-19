import { Checkout as SourceCheckOut } from "SourceRoute/Checkout/Checkout.component";
import ContentWrapper from "SourceComponent/ContentWrapper";

import "./CheckOut.override.style.scss";

class CheckOut extends SourceCheckOut {
  renderCheckOutProgress() {
    let { checkoutStep } = this.props;

    const progressBar = () => {
      const stepArr = [];
      let stepIndex = 0;

      for (let step in this.stepMap) {
        if (checkoutStep === step) {
          stepArr.push(
            <>
              <div className="line">
                <div></div>
              </div>
              <div className="checkBox">
                <div className="circle_red">
                  {<div className="circleSymbol">{stepIndex + 1}</div>}
                </div>
                <div className="checkBoxTitle">{this.stepMap[step].title}</div>
              </div>
            </>
          );
        } else {
          stepArr.push(
            <>
              <div className="line"></div>
              {Object.keys(this.stepMap).length - 1 !== stepIndex && (
                <div className="checkBox">
                  <div className="circle">
                    <div className="circleSymbol_gray">{stepIndex + 1}</div>
                  </div>
                  <div className="checkBoxTitle_gray">
                    {this.stepMap[step].title}
                  </div>
                </div>
              )}
            </>
          );
        }

        stepIndex++;
        nextStepNumber++;
      }

      return <div className="checkOutProgressContainer">{stepArr}</div>;
    };

    return progressBar();
  }

  render() {
    return (
      <main block="Checkout">
        {this.renderCheckOutProgress()}
        <ContentWrapper
          wrapperMix={{ block: "Checkout", elem: "Wrapper" }}
          label={__("Checkout page")}
        >
          {this.renderSummary(true)}
          <div block="Checkout" elem="Step">
            {this.renderTitle()}
            {this.renderGuestForm()}
            {this.renderStep()}
            {this.renderLoader()}
          </div>
          <div>
            {this.renderSummary()}
            {this.renderPromo()}
            {this.renderCoupon()}
          </div>
        </ContentWrapper>
      </main>
    );
  }
}

export default CheckOut;
