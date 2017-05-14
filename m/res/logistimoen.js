/*
 * Copyright © 2017 Logistimo.
 *
 * This file is part of Logistimo.
 *
 * Logistimo software is a mobile & web platform for supply chain management and remote temperature monitoring in
 * low-resource settings, made available under the terms of the GNU Affero General Public License (AGPL).
 *
 * This program is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General
 * Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any
 * later version.
 *
 * This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied
 * warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU Affero General Public License
 * for more details.
 *
 * You should have received a copy of the GNU Affero General Public License along with this program.  If not, see
 * <http://www.gnu.org/licenses/>.
 *
 * You can be released from the requirements of the license by purchasing a commercial license. To know more about
 * the commercial license, please contact us at opensource@logistimo.com
 */

$operations = { 'vs' : 'View', 'ei' : 'Issues', 'er' : 'Receipts', 'es' : 'Stock count', 'ew' : 'Discards', 'vo' : 'Orders', 'no' : 'New orders', 'ts' : 'Transfer stock','ne':'Entities','vt':'Transactions','vp':'View Profile','xi':'Export Inventory','tr': 'Transfers'};
$orderTypes = { 'prc' : 'Purchases', 'sle' : 'Sales' };
$nMsg = { 'ei' : 'unsent issues', 'er' : 'unsent receipts', 'es' : 'unsent stock count', 'ew' : 'unsent discards',  'no' : 'unsent orders', 'ts' : 'unsent transfer stock','ne': 'unsent entities'};
$sMsg = { 'ei' : 'Send unsent issues', 'er' : 'Send unsent receipts', 'es' : 'Send unsent stock count', 'ew' : 'Send unsent discards',  'no' : 'Send unsent orders', 'ts' : 'Send unsent transfer stock','ne': 'Send unsent entities'};
$tMsg = { 'ei' : 'issued', 'er' : 'received', 'es' :  'stock counted', 'ew' : 'discarded',  'ts' : 'transferred'};
$tPMsg = { 'ei' : 'issue', 'er' : 'receipt', 'es' :  'stock count', 'ew' : 'discard',  'ts' : 'transfer'};
$networkErrMsg = 'Unable to connect to server. Please check network connection and try again.';
	  		


$labeltext = {
    acquiringlocation:"Acquiring location",
    added:"added",
    additemstoorder: "Add items to order",
    addpayment: "Add payment",
    addtoorder: "Add to order",
    allocated: "Allocated",
    availablecredit: "Available Credit",
    available: "Available", 
    backordered: "Backordered", 
    batch: "Batch",
	batches: "Batches",
    batchexpirydate: "Expiry(dd/mm/yyyy)",
    batchmanufactureddate: "Manufactured Date(dd/mm/yyyy)",
    by:'by',
    cancel_lower: "cancel",
    cancelled:"Cancelled",
    call: "Call",
    change: "Change",
    cityvillage: "City/Village",
    clickhere: "click here",
    clicktoaddnew:"Click \'Add\' to add a new ",
    closingstock:"Closing stock",
    comments:"Comments",
    confirm:"Confirm",
    confirm_lower:"confirm",
    confirmed:"Confirmed",
    confirmpassword: "Confirm Password",
    consumptionrate: "Consumption rate",
    created: "Created",
    customer: "Customer",
    customers: "Customers",
    daily: "Daily",
    date:"Date",
    day: "day",
    days_lower: "days",
    days: "Days",
    demandforecast: "Demand Forecast",
    discarded:"discarded",
    discards: "Discards",
    discard: "Discard",
    districtcounty: "District/County",
    durationofstock: "drtn of stock",
    earlier:"earlier",
    editorder:"Edit order reason",
    email: "Email",
    entercustomer: "Enter customer",
    enterdiscards:"Enter discards",
    enterentityname:"Enter entity",
    enterentitydetails: "Enter entity details",
    enterissues:"Enter issues",
    enterphysicalstock: "Enter stock count",
    enterpurchases:"Enter purchases",
    enterreceipts:"Enter receipts",
    entersales:"Enter sales",
    enteruserdetails:"Enter user details",
    entervendor: "Enter vendor",
    entity:"Entity",
    entities : "Entities",
    entitydetails: "Entity Details",
    entityname: "Entity name",
    estimateddateofarrival:"Estimated date of arrival",
    expiringon:"expiring on",
    expiredbatches:"Expired batches",
    export:"Export",
    exportinventory: "Export Inventory",
    exportorder: "Export Order",
    exportorders: "Export Orders",
    exporttransactions: "Export Transactions",
    feedback: "Feedback",
    feedbacktext: "Feedback text",
    firstname: "First name",
    forgotpassword: "Forgot password",
    from:"from",
    fromdate: "From date",
    fulfilled:"Fulfilled",
    fulfil:"Fulfill",
    fulfil_lower:"fulfill",
    fulfillmentdiscrepancyreason: "Fulfillment discrepancy reason",
    halfyear_lower: "half-year",
    halfyear: "Half-year",
    imageoptions: "Image Options",
    incoming: "Incoming",
    intransit: "In transit",
    inventory:"Inventory",
    inventory_lower:"inventory",
    issued:"issued",
    issues:"Issues",
    items:"item(s)",
    lastname: "Last name",
    lastupdated:"Last updated",
    limit:"Limit",
    loading:"Loading",
    loadingmaterials: "Loading materials",
    loadingorders:"Loading orders",
    location: "Location",
    manufacturedby: "Manufactured by",
    materials:"material(s)",
    max: "Max",
    message:"Message",
    min: "Min",
    month: "month",
    months_lower: "months",
    months: "Months",
    monthly: "Monthly",
    myentity: "My entity",
    name: "Name",
    needhelptext: "Need help?",
    newentityname:"New entity name",
    newname:"New Name",
    neworder : "New Order",
    neworders: "New Orders",
    newtext:"new",
    noofitems: "No of items",
    notification:"Notification",
    notifications: "Notifications",
    openingstock:"Opening stock",
    operationstext:"Operations",
    of:"of",
    on: "on",
    oops:"Oops",
    open:"Open",
    or:"or",
    ordernewstock:"Order new stock",
    order:"Order",
    order_lower:"order",
    orderingdiscrepancyreason:"Ordering discrepancy reason",
    ordermodificationreason: "Order modification reason",
    ordered:"Ordered",
    orders: "Orders",
    orders_lower: "orders",
    ordertag : "Order tag",
    original: "Original",
    originallyordered: "Originally ordered",
    otherentities: "Other entities",
    others: "Others",
    outgoing: "Outgoing",
    overridereason:"Override recommended reason",
    packagesize:"Package size",
    paid:"Paid",
    password: "Password",
    paymentoption:"Payment option",
    pending: "Pending",
    phone: "Phone",
    photo:"Photo",
    photos:"photo(s)",
    physicalstock: "Stock count",
    pincode: "Pincode",
    price: "Price",
    profile: "Profile",
    purchaseorder:"Purchase order",
    purchases:"Purchases",
    quantity: "Quantity",
    quantity_lower: "quantity",
    quantityentered:"entered",
    quarter_lower: "quarter",
    quarter: "Quarter",
    reasons:"Reason",
    reconnect:"Reconnect",
    reconnectnow:"Reconnect Now",
    receipts:"Receipts",
    received:"received",
    received_upper: "Received",
    recommendedquantity: "Recommended",
    recommendedquantity_lower:"recommended quantity",
    referenceid:"Reference Id",
    refreshinginventory:"Refreshing inventory",
    refreshingtransactions:"Refreshing transactions",
    release:"Release",
    releases:"Releases",
    reset:"Reset",
    reopen:"Reopen",
    reopen_lower:"reopen",
    reorder:"Change order",
    requiredbydate: "Required by date",
    review:"Review",
    routetag:"Route tag",
    sales:"Sales",
    salesorder:"Sales order",
    selected:"selected",
    selectroutetag:"Select route tag",
    selecttag: "Select tag",
    ship:"Ship",
    ship_lower:"ship",
    shipped:"Shipped",
    shipment:"Shipment",
    shipment_lower: "shipment",
    shipments: "Shipments",
    shipmentid: "Shipment Id",
    shipmentdiscrepancyreason: "Shipping discrepancy reason",
    state: "State",
    status: "Status",
    stock: "Stock",
    stockonhand:"Stock on hand",
    stockatrelatedkid : "Stock at relatedkid",
    stockcounted:"stock counted",
    street: "Street",
    submittingexportrequest:"Submitting export request",
    support:"Support",
    taluk:"Taluk",
    tag: "Tag",
    tax: "Tax",
    to:"to",
    todate: "To date",
    topic: "Topic",
    total: "Total",
    trackingid: "Tracking Id",
    transaction: "Transaction",
    transactionhistory: "Transaction History",
    transactions: "Transactions",
    transactions_lower: "transactions",
    transferstock: "Transfer Stock",
    transfer:"Transfer",
    transfers: "Transfers",
    transporter: "Transporter",
    unknown: "Unknown",
    updated:"Updated",
    updatingorder:"Updating order",
    userid: "User ID",
    user: "user",
    users:"Users",
    vendor: "Vendor",
    vendors: "Vendors",
    view: "View",
    viewdemand:"View demand",
    viewcomments:"View comments",
    viewhistory:"View history",
    vieworders: "View Orders",
    viewstock:"View stock",
    week: "week",
    weeks_lower: "weeks",
    weeks: "Weeks",
    weekly: "Weekly",
    welcome: "Welcome",
    yourcurrentlocationis : "Your current location is"
};

$buttontext = {
    add: "Add",
    addentity: "Add entity",
    addnewbatch: "Add new batch",
    allocate: "Allocate",
    back:"Back",
    cancel: "Cancel",
    cancelorder: "Cancel <order>",
    clear: "Clear",
    clearall: "Clear all",
    clearbatches: "Clear batches",
    delete: "Delete",
    edit: "Edit",
    editentity: "Edit entity",
    edituser: "Edit user",
    enter: "Enter",
    exporttext: "Export",
    hidebatches: "Hide batches",
    home:"Home",
    login:"Login",
    logout:"Logout",
    next: "Next",
    no: "No",
    ok: "OK",
    options:"Options",
    previous: "Previous",
    print:"Print",
    refresh: "Refresh",
    resendOTP: "Re-send OTP",
    resetpassword: "Reset password",
    save: "Save",
    send: "Send",
    sendnow: "Send now",
    sendOTP: "Send OTP",
    skip:"Skip",
    submit: "Submit",
    upload: "Upload",
    viewbatches: "View batches",
    yes:"Yes"
};

$messagetext={
	actualdatenotinfuture: "Actual date of transaction cannot be in the future",
    adding: "Adding",
    allocationcannotbegreaterthanstock: "Allocation cannot be greater than available stock (sq)",
    allocationscannotbegreaterthanordered: "Allocation cannot be greater than ordered quantity",
    allocatebeforeshipping:"Please allocate stock to items in the order before shipping",
    allocatefullybeforeshipping: "Please edit the materials and allocate fully before shipping",
    allitemscannotbezero:"All items cannot have a quantity of zero",
    allitemsinorder:"All items in this view are already in order",
    areallowedtobeuploaded:"are allowed to be updated.ै",
    areyousureyouwantomarkorder: "Are you sure you want to <status> the <order>?",
    areyousureyouwantomarkorderasfulfilled:"Are you sure you want to mark this <order> as fulfilled with these received quantities?",
    assigncurrentlocation: "Assign your current location to this entity",
    authenticating:"Authenticating",
    automaticallymanagerofentity: "You will be automatically manager of this entity",
    availablestockiszero: "Available stock for <material> is 0. Please ensure stock is available before allocating.",
    availablestockisless: "Unable to allocate stock for material - <material>. Available stock (<st>) is less than the stock required (<oq>) to complete the allocation.",
	batchalreadyexists: "A batch with this number already exists",
    batchdatarequired:"Batch metadata required for the material operation",
    batchshouldnothavequotes:"Batch id should not contain quotes(\")",
    batchmanagementisdisabled : "Batch management is disabled.",
    cannotbetransferred: "cannot be transferred",
    cannotexceedcurrentstock:"cannot exceed current stock on hand",
    cannotexceedavailablestock: "cannot exceed available stock",
    changesmadepleasesave:"You have made some changes. Do you wish to save changes before you proceed?",
    changedorderquantityfromrecommendedquantity: "You have changed the order quantity from the recommended quantity",
    changingstatusoforder:"Changing status of order",
    checkthisforagent: "(check this ONLY if you are any agent entering transactions on behalf of this entity).",
    chooseshipment:"Please choose a shipment",
    clearcustomerselected: "You had earlier selected a customer for issues. The customer information will now be removed for the materials. Do you want to continue?",
    clearvendorselected: "You had earlier selected a vendor for receipts. The vendor information will now be removed for the materials. Do you want to continue?",
    clearvendorselectedpo: "You had earlier selected a vendor for purchase orders. The vendor information will now be removed for the materials. Do you want to continue?",  
    clearenterdiscards:"You have entered data under \"Enter discards\". Please \"Send\" or \"Clear\" your entries before trying a new operation.",
    clearenterdiscardsformaterial:"You have entered data under \"Enter discards\" for this material. Please \"Send\" or \"Clear\" your entries before trying a new operation.",
    clearenterissues:"You have entered data under \"Enter issues\". Please \"Send\" or \"Clear\" your entries before trying a new operation.",
    clearenterissuesformaterial:"You have entered data under \"Enter issues\" for this material. Please \"Send\" or \"Clear\" your entries before trying a new operation.",
    clearenterphysicalstock: "You have entered data under \"Enter stock count\". Please \"Send\" or \"Clear\" your entries before trying a new operation.",
    clearenterphysicalstockformaterial: "You have entered data under \"Enter stock count\" for this material. Please \"Send\" or \"Clear\" your entries before trying a new operation.",
    clearenterreceipts:"You have entered data under \"Enter receipts\". Please \"Send\" or \"Clear\" your entries before trying a new operation.",
    clearenterreceiptsformaterial:"You have entered data under \"Enter receipts\" for this material. Please \"Send\" or \"Clear\" your entries before trying a new operation.",
    clearentertransferstock:"You have entered data under \"Transfer stock\". Please \"Send\" or \"Clear\" your entries before trying a new operation.",
    clearentertransferstockformaterial:"You have entered data under \"Transfer stock\" for this material. Please \"Send\" or \"Clear\" your entries before trying a new operation.",
    confirmclearbatches: "This will set all batch quantities to zero. Proceed?",
    contactusifyouneedhelp: "if you need help",
	correctandresend: "correct and resend",
	couldnotrefreshinventory: "Inventory could not be automatically refreshed from the server.",
	couldnotrefreshorders: "Orders could not be refreshed from the server.",
	couldnotrefreshtransactions: "Transactions could not be refreshed from the server.",
    couldnotstoreentitylocally:", could not be stored locally. Please logout, refresh and verify.",
    couldnotstorelocally: ", could not store changes locally. Logout and refresh to see changes later.",
    couldnotstoreorderlocally: ", could not store order locally. Logout and refresh to see order later.",
    creditavailableafterorderships:"Credit available after this order ships",
    creditavailablenow: "Credit available now",
    dateofactualissue: "Date of actual issue",
    dateofactualreceipt: "Date of actual receipt",
    dateofactualphysicalstock: "Date of actual stock count",
    dateofactualdiscard: "Date of actual discard",
    dateofactualtransfer: "Date of actual transfer",
    deleteoneofthem:"Delete one of them if you want to upload a new photo",
    didnotreceivecorrectresponse:"Did not receive correct response,due to some server error. Please try sending again.",
    differentfromrecommendedqty:" is different from recommended quantity of",
    done:"Done",
    donewitherrors:"Done - with errors",
    doyouwanttologout:"Do you want to log out?",
    doyouwanttocontinue:"Do you want to continue?",
    emptyordercannotbe:"An empty order cannot be ",
	enablelocationservice: "Location service is not enabled. Enable it now?",
    enteractualdate: "Enter the date of actual transaction",
    enteraentityname: "Enter a entity name",
    enteramaterialname: "Enter a material name",
    enteramobilephonenumber:"Enter a mobile phone number",
    enteramount: "Enter amount",
    enteranumber:"Enter a number",
    enterbatchnumber: "Enter batch ID",
    enterbatchexpirydate : "Enter batch expiry date(dd/mm/yyyy)",
    enterbatchmanufactureddate: "Enter manufactured date(dd/mm/yyyy)",
    enteremailaddress:"Enter your email address",
    enteremailaddresstoexportinventory:"Please enter an email address to export inventory",
    enteremailaddresstoexportorder:"Please enter an email address to export orders",
    enteremailaddresstoexporttransactions:"Please enter an email address to export transactions",
    entermanufacturername: "Enter manufacturer",
    enternameforuser:"Enter a name for the user" ,
    enterordernumber: "Enter order number",
    enterordertag:"Enter order tag",
    enterotpmessage:"Once the OTP is received, please  enter the user name and the OTP and click \'Reset password\'. A new password will be sent to your mobile phone.",
    enterotp: "Enter OTP",
    enterpassword:"Enter password",
    enterreason: "Enter reason",
    enteruniqueentityname: "Enter a unique name for the entity.",
    enterusername:"Enter username",
    entityerrorencountered:"An error was encountered updating\/adding the entity.",
    entitymappedlocation: "This entity is mapped at location.",
    entityupdatedonserver: "Entity was updated on server",
	error: "Error",
	error_system: "Server encountered an error. Please try again later.",
    errorsinquantities: "Some errors were found in quantities entered. Please correct the errors below and try again.",
	exiting: "Exiting",
    expirydatecannotbegreaterthantoday: "Expiry date cannot not be earlier than today",
    exportinitiated:"Export initiated",
    feedbacknote: "NOTE: Use this form only to provide feedback on improving the application. Any support required in using the application should be requested using the support phone or email options.",
    feedbackacknowledge:"Thank you for your valuable feedback. Our team will consider your suggestions.",
    fefomessage: "You have not allocated fully from older batches. It is highly recommended that you fully allocate from batches that expire first. Continue with your current allocation?",
    fetchstockatrelatedentity: "Fetch stock of mn from relatedkid?",
    fieldsmarkedmandatory:"(fields marked with a * are mandatory)",
    forgotpasswordmessage:"Enter the user ID . A one-time password (OTP) will be sent over SMS to the user\'s registered mobile phone. Once the OTP is received, please enter the OTP in this page in the \‘OTP\’ field that will be shown later. ",
    fromthelistbelow: "from the list below.",
    generateotpmessage: "It can take a few minutes to receive the one-time password (OTP) over SMS. If you do not receive the OTP even after 15 minutes, please click on the \“Resend OTP\” link.",
    invalidemail:'Invalid email',
    invalidnameorpassword: "Invalid name or password!",
    invalidnameorpasswordverify: "Invalid name or password. Please verify your password and login again, or re-connect with the server to authenticate.",
	inventoryrefreshedfromserver: "Inventory was refreshed from the server",
    inventorysuccessfullyupdated:"Inventory successfully updated",
	isrequired: "is required",
    lessthanquantityof:" is less than order quantity of ",
	loginsessionhasexpired: "Your login is no longer valid. Please login again and continue.",
    makememanager:"Make me manager of this entity",
    manufactureddatecannotbelaterthantoday: "Manufactured date cannot not be later than today",
    markorderasfulfilled:"Mark order as fulfilled",
	materialdoesnotexistdestentity: "Material does not exist in destination entity",
	materialsexcessofstock: "The quantites of these materials are entered in excess of stock in hand. Please review your current stock and correct the entered quantities.",
    materialsexcessofavailablestock: "The quantites of these materials are entered in excess of available stock. Please review your current stock and correct the entered quantities.",
    mustbepositiveinteger: "must be a positive integer",
    newversionofappavailable:"A new version of this application is now available. Please upgrade this application within X day(s) from the PlayStore.",
    newquantityafteroperation:"New quantity after the operation will be: ",
    nobatchesavailable: "No batches available",
    nocamera:"No camera",
    nocameradetected:"Sorry. No camera could be detected on your device.",
    nochanges: "No changes",
    nochangestosend: "No changes to send. Edit order quantities and then Send",
    nocustomers: "No customers.",
    nocustomerorvendor:"No customers or vendors to transfer to.",
    nocustomerorvendortoorder:"No customers or vendors to order.",
    noitems:"No items",
    noitemshavebeenedited: "No items have been edited for order",
    noitemsinorder:"No items in this order.",
    noitemstoreview: "No items in review",
    nooperationsenabled: "No operations are enabled",
    noorders: "No orders",
    noordersavailable:"No orders available. Refresh to load orders.",
    nomaterials:"No materials",
	nonetworkconnection: "No network connection.",
    nothingtosend:"Nothing to send. Please enter relevant data and try again.",
    notinteger: "Enter an integer only.",
    notpositivenumber:"Enter a positive number",
    nostockavailable: "There is no stock available",
	nosuchmaterial: "No such material found in this entity",
    notransactions:"No transactions",
    notvalidnumber:"You have not entered a valid number",
    novendors:"No vendors.",
    novendorspecified:"since no vendor is specified for it. Please contact your manager to ensure that the order is associated with a vendor.",
    numunitsdoesnotmatch:"quantity of mn does not match the multiples of units expected in hnm. It should be in multiples of hq mn.",
    operatorassignedtothisentity:"Operator was assigned to this entity",
    orderedcannotbelessthanallocated:"Ordered quantity cannot be less than allocated quantity",
    orderedcannotbelessthanshipped:"Ordered quantity cannot be less than shipped quantity",
    orderitems:"Order items",
    orderquantitydifferentfromrecommendedquantity:"Ordered quantity was different from recommended quantity for some materials. Do you wish to continue?",
    ordersuccessfullycreatewithid:"Order successfully created with ID",
    ordersuccessfullyupdated:"Order successfully updated",
	ordersrefreshedfromserver: "Orders were refreshed from the server",
	otpsenttomobile: "OTP is sent to your phone through SMS",
    passwordsdonotmatch: "Passwords do match. Enter the same password as above.",
    passwordsenttomobile: "A new password is sent to your phone through SMS.",
    physicallyatentitynow: "(if you are physically at this entity now)",
    pleaseadditemstoorder:"Please add items to the order.",
    pleasechooseanothermaterial:"Please choose another material.",
    pleaseenterfeedback:"Please enter your feedback on the application features.",
    pleaseentertransporter:"Please enter a transporter",
    pleaseentervalidcityname:"Please enter a valid city/village name between 1-200 characters",
    pleaseentervalidentityname:"Please enter a valid entity name between 1-200 characters",
    pleaseentervalidpassword: "Please enter a valid password (4-20 characters).",
    pleaseentervalidphone:"Please enter a valid mobile phone number (8-15 numbers). Enter the phone number (without any spaces/characters) [e.g. 9834568420].",
    pleaseentervalidstatename:"Please enter a valid state name between 1-200 characters",
    pleaseentervaliduserid: "Please enter a valid user ID between 4-50 alpha-numeric characters.",
    pleaseentervalidusername:"Please enter a valid username between 1-20 characters",
    pleasenteryourusernameandlogin:"Please enter your username and password.",
    pleaseenteryourusernameandsend:"Please enter your username and click \"Send OTP\". A one-time password (OTP) will be sent to your mobile phone over SMS.",
    pleaseloginbeforesendingfeedback: "Please login before sending feedback",
    pleaseselectamaterialstatus: "Please select a material status",
    pleaseselectareason:"Please select a reason.",
    positivenumbergreaterthanzero:"Enter a positive number greater than zero",
    positivenumbergreatenthanorequaltozero:"Enter a positive number greater than or equal to 0",
    quantityallocateddoesnotmatchordered:"Quantity allocated allocq  does not match orderq order quantity. Do you want to proceed?",
    receiveemailat:"You should receive the data via email at ",
    reconnectoserverrequired:"Reconnect to server required",
    refreshlogintext:"To connect over the network and get fresh data from server, enter your name and password and click below:",
	refreshingofflinedata: "Refreshing offline data",
	requireddatecannotbeearlierthantoday: "Required date cannot be earlier than today",
	resetbatchconfirm:"Do you wish to reset the stock on this batch to zero?",
    reviewandconfirm:"Please review and confirm",
    savedchanges: "Saved changes.",
    select: "Select a",
    selectacustomer:"Select a customer from the list below.",
    selectreason:"Select reason",
    selectstatus:"Select status",
    selectavendor:"Select a vendor from the list below.",
    selectroutetagtext :"Select a route tag, if applicable. This entity will be placed under that tag within your account.",
    selecttypeofentity:"Select the type of entity you wish to transfer to",
    selecttypeoforder:"Select the type of order",
    sending:"Sending",
    sendlogininfosms:"Send login information to user's phone over SMS",
	serviceisdown: "Service is unavailable at the moment. Please try after some time, or contact your administrator.",
    somedataenterednotsentlogout:"Data that you entered locally is not yet sent to server. Would you like to log out anyway?",
	somedataenterednotsentlogout_loginasreconnect: "You are logging out now.<br/><br/>Data that you entered locally is not yet sent to the server. Please send the data and then logout. If you logout now, you will have to re-enter this data later.<br/><br/>Would you like to log out anyway?",
    somedataenterednotsentrefresh:"Some data that you entered locally are not yet sent to the server. Local data will be cleared on Refresh. If you wish, you can Login again and send this data. Would you like to clear this data and refresh anyway?",
	someerrorswereencountered: "Some errors were encountered in",
    sorryonly:"Sorry only",
    specifyreasonforcancellingorder: "Specify reason for cancelling order",
    specifyreasonforeditingquantity: "Specify reason for editing order quantity",
    specifyreasonforpartialfulfilment: "Specify reason for partial fulfillment",
    specifyreasonforpartialshipment: "Specify reason for partial shipment",
    specifyreasonrecommendedquantity: "Specify reason for deviation from recommended quantity",
    stockonhand:"stock on hand of",
    success:"Success",
    successfullycreated:"Successfully created",
    successfullyupdated: "Successfully updated",
    switchservermobile: "Getting data from server. Please wait...",
    switchserverweb: "You will be redirected to a new server. Please login again and continue.",
    thisordercannotbe:"This order cannot be ",
	transactionsrefreshedfromserver: "Transactions were refreshed from the server",
	transferfailedfrombatchenabledentity: "Transfer is not possible from a non-batch material to a batch-enabled material",
    unabletofindorderid:"Unable to find order with ID",
    unabletofindentitydata:"Unable to find entity data. Please refresh and try again.",
    unabletofindshipmenid: "Unable to find shipment with ID",
    unabletofinduserdata:"Unable to find user data. Please refresh and try again.",
    updating:"Updating",
    upgradeappnow:"A new version of the mobile application is available. Please upgrade now.",
    uploadingphoto:"Uploading photo",
    unsentpurchaseorder:"You have unsent Purchase orders. Please \"Send\" or \"Clear\" your orders before creating a sales order.",  
    unsentsalesorder:"You have unsent Sales orders. Please \"Send\" or \"Clear\" your orders before creating a purchase order.",  
    userhasassetonlypermission: "User has permission for asset view only",
    useridmustbeunique:"User ID must be unique",
    useridpasswordgenerated: "A User ID and Password will be automatically generated for this operator. If you wish to enter these manually",
    verifybeforeexporting:"(please verify email before exporting)",
    vendorstocknotavailable:"Vendor stock was not found locally, and is required for validating allocations. Fetch vendor stock?",
    vendorstocknotavailableforcheck:"Vendor stock is not available locally. It is required to validate against vendor's available stock before shipping. Fetch vendor stock now? \n NOTE: Once vendor stock is fetched, please ship the order once again to complete the shipping process.",
    viewstockatrelatedentity: "View stock at relatedkid", 
    warning:"Warning",
	willsendlater: "Will send later",
    wishtoaddoperator:"If you wish to add a new operator, enter his/her details below.",
    yourcurrentlocationis: "Your current location is"

};