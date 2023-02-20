import { find, sum } from "lodash";

function SubTotalCalculator(params) {
    const amount = params.map(
        (item) =>
          item.price * item.quantity
          
      );
      const total = sum(amount);

      return total
}
export default SubTotalCalculator;