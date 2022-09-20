import { Checkout as SourceCheckOut } from "SourceRoute/Checkout/Checkout.component";
import ContentWrapper from "SourceComponent/ContentWrapper";
import CheckoutProgress from "./CheckoutProgress";
import "./Checkout.override.style.scss";

class Checkout extends SourceCheckOut {
  render() {
    const stepMap = this.stepMap;
    const { checkoutStep } = this.props;

    return (
      <main block="Checkout">
        <CheckoutProgress stepMap={stepMap} checkoutStep={checkoutStep} />
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

export default Checkout;
