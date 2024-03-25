/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
export default function l(clientAPI) {
    debugger
    var amountValue = clientAPI.evaluateTargetPath('#Control:price/#Value');
    var quantityValue = clientAPI.evaluateTargetPath('#Control:quantity/#Value');
    var basePrice = clientAPI.evaluateTargetPath('#Control:supp_quot_price/#Value');
    var bp = parseFloat(basePrice);

    if ((!amountValue || amountValue.trim() === '' || amountValue < bp) || (!quantityValue || quantityValue === '')) {        // If amount value is blank, display a validation failure message
        clientAPI.executeAction('/n4/Actions/ValidationFailure.action');
    } else {
        // If amount value is not blank, return true to indicate validation is successful
        clientAPI.executeAction('/n4/Pages/Supplier_table/Supplier_table_List.page');
        // return true;
    }
}
