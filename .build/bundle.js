(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else {
		var a = factory();
		for(var i in a) (typeof exports === 'object' ? exports : root)[i] = a[i];
	}
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./build.definitions/n4/i18n/i18n.properties":
/*!***************************************************!*\
  !*** ./build.definitions/n4/i18n/i18n.properties ***!
  \***************************************************/
/***/ ((module) => {

module.exports = ""

/***/ }),

/***/ "./build.definitions/application-index.js":
/*!************************************************!*\
  !*** ./build.definitions/application-index.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

let application_app = __webpack_require__(/*! ./Application.app */ "./build.definitions/Application.app")
let n4_actions_application_appupdate_action = __webpack_require__(/*! ./n4/Actions/Application/AppUpdate.action */ "./build.definitions/n4/Actions/Application/AppUpdate.action")
let n4_actions_application_appupdatefailuremessage_action = __webpack_require__(/*! ./n4/Actions/Application/AppUpdateFailureMessage.action */ "./build.definitions/n4/Actions/Application/AppUpdateFailureMessage.action")
let n4_actions_application_appupdateprogressbanner_action = __webpack_require__(/*! ./n4/Actions/Application/AppUpdateProgressBanner.action */ "./build.definitions/n4/Actions/Application/AppUpdateProgressBanner.action")
let n4_actions_application_appupdatesuccessmessage_action = __webpack_require__(/*! ./n4/Actions/Application/AppUpdateSuccessMessage.action */ "./build.definitions/n4/Actions/Application/AppUpdateSuccessMessage.action")
let n4_actions_application_logout_action = __webpack_require__(/*! ./n4/Actions/Application/Logout.action */ "./build.definitions/n4/Actions/Application/Logout.action")
let n4_actions_application_navtoabout_action = __webpack_require__(/*! ./n4/Actions/Application/NavToAbout.action */ "./build.definitions/n4/Actions/Application/NavToAbout.action")
let n4_actions_application_navtoactivitylog_action = __webpack_require__(/*! ./n4/Actions/Application/NavToActivityLog.action */ "./build.definitions/n4/Actions/Application/NavToActivityLog.action")
let n4_actions_application_navtosupport_action = __webpack_require__(/*! ./n4/Actions/Application/NavToSupport.action */ "./build.definitions/n4/Actions/Application/NavToSupport.action")
let n4_actions_application_onwillupdate_action = __webpack_require__(/*! ./n4/Actions/Application/OnWillUpdate.action */ "./build.definitions/n4/Actions/Application/OnWillUpdate.action")
let n4_actions_application_reset_action = __webpack_require__(/*! ./n4/Actions/Application/Reset.action */ "./build.definitions/n4/Actions/Application/Reset.action")
let n4_actions_application_resetmessage_action = __webpack_require__(/*! ./n4/Actions/Application/ResetMessage.action */ "./build.definitions/n4/Actions/Application/ResetMessage.action")
let n4_actions_application_usermenupopover_action = __webpack_require__(/*! ./n4/Actions/Application/UserMenuPopover.action */ "./build.definitions/n4/Actions/Application/UserMenuPopover.action")
let n4_actions_bid_reply_bid_reply_createentity_action = __webpack_require__(/*! ./n4/Actions/Bid_reply/Bid_reply_CreateEntity.action */ "./build.definitions/n4/Actions/Bid_reply/Bid_reply_CreateEntity.action")
let n4_actions_bid_reply_bid_reply_deleteentity_action = __webpack_require__(/*! ./n4/Actions/Bid_reply/Bid_reply_DeleteEntity.action */ "./build.definitions/n4/Actions/Bid_reply/Bid_reply_DeleteEntity.action")
let n4_actions_bid_reply_bid_reply_updateentity_action = __webpack_require__(/*! ./n4/Actions/Bid_reply/Bid_reply_UpdateEntity.action */ "./build.definitions/n4/Actions/Bid_reply/Bid_reply_UpdateEntity.action")
let n4_actions_bid_reply_navtobid_reply_create_action = __webpack_require__(/*! ./n4/Actions/Bid_reply/NavToBid_reply_Create.action */ "./build.definitions/n4/Actions/Bid_reply/NavToBid_reply_Create.action")
let n4_actions_bid_reply_navtobid_reply_detail_action = __webpack_require__(/*! ./n4/Actions/Bid_reply/NavToBid_reply_Detail.action */ "./build.definitions/n4/Actions/Bid_reply/NavToBid_reply_Detail.action")
let n4_actions_bid_reply_navtobid_reply_edit_action = __webpack_require__(/*! ./n4/Actions/Bid_reply/NavToBid_reply_Edit.action */ "./build.definitions/n4/Actions/Bid_reply/NavToBid_reply_Edit.action")
let n4_actions_bid_reply_navtobid_reply_list_action = __webpack_require__(/*! ./n4/Actions/Bid_reply/NavToBid_reply_List.action */ "./build.definitions/n4/Actions/Bid_reply/NavToBid_reply_List.action")
let n4_actions_closemodalpage_cancel_action = __webpack_require__(/*! ./n4/Actions/CloseModalPage_Cancel.action */ "./build.definitions/n4/Actions/CloseModalPage_Cancel.action")
let n4_actions_closemodalpage_complete_action = __webpack_require__(/*! ./n4/Actions/CloseModalPage_Complete.action */ "./build.definitions/n4/Actions/CloseModalPage_Complete.action")
let n4_actions_closepage_action = __webpack_require__(/*! ./n4/Actions/ClosePage.action */ "./build.definitions/n4/Actions/ClosePage.action")
let n4_actions_createentityfailuremessage_action = __webpack_require__(/*! ./n4/Actions/CreateEntityFailureMessage.action */ "./build.definitions/n4/Actions/CreateEntityFailureMessage.action")
let n4_actions_createentitysuccessmessage_action = __webpack_require__(/*! ./n4/Actions/CreateEntitySuccessMessage.action */ "./build.definitions/n4/Actions/CreateEntitySuccessMessage.action")
let n4_actions_deleteconfirmation_action = __webpack_require__(/*! ./n4/Actions/DeleteConfirmation.action */ "./build.definitions/n4/Actions/DeleteConfirmation.action")
let n4_actions_deleteentityfailuremessage_action = __webpack_require__(/*! ./n4/Actions/DeleteEntityFailureMessage.action */ "./build.definitions/n4/Actions/DeleteEntityFailureMessage.action")
let n4_actions_deleteentitysuccessmessage_action = __webpack_require__(/*! ./n4/Actions/DeleteEntitySuccessMessage.action */ "./build.definitions/n4/Actions/DeleteEntitySuccessMessage.action")
let n4_actions_genericbannermessage_action = __webpack_require__(/*! ./n4/Actions/GenericBannerMessage.action */ "./build.definitions/n4/Actions/GenericBannerMessage.action")
let n4_actions_genericmessagebox_action = __webpack_require__(/*! ./n4/Actions/GenericMessageBox.action */ "./build.definitions/n4/Actions/GenericMessageBox.action")
let n4_actions_genericnavigation_action = __webpack_require__(/*! ./n4/Actions/GenericNavigation.action */ "./build.definitions/n4/Actions/GenericNavigation.action")
let n4_actions_generictoastmessage_action = __webpack_require__(/*! ./n4/Actions/GenericToastMessage.action */ "./build.definitions/n4/Actions/GenericToastMessage.action")
let n4_actions_header_table_header_table_createentity_action = __webpack_require__(/*! ./n4/Actions/Header_table/Header_table_CreateEntity.action */ "./build.definitions/n4/Actions/Header_table/Header_table_CreateEntity.action")
let n4_actions_header_table_header_table_createitem_table_action = __webpack_require__(/*! ./n4/Actions/Header_table/Header_table_CreateItem_table.action */ "./build.definitions/n4/Actions/Header_table/Header_table_CreateItem_table.action")
let n4_actions_header_table_header_table_createsupplier_bid_table_action = __webpack_require__(/*! ./n4/Actions/Header_table/Header_table_CreateSupplier_bid_table.action */ "./build.definitions/n4/Actions/Header_table/Header_table_CreateSupplier_bid_table.action")
let n4_actions_header_table_header_table_createsupplier_table_action = __webpack_require__(/*! ./n4/Actions/Header_table/Header_table_CreateSupplier_table.action */ "./build.definitions/n4/Actions/Header_table/Header_table_CreateSupplier_table.action")
let n4_actions_header_table_header_table_deleteentity_action = __webpack_require__(/*! ./n4/Actions/Header_table/Header_table_DeleteEntity.action */ "./build.definitions/n4/Actions/Header_table/Header_table_DeleteEntity.action")
let n4_actions_header_table_header_table_detailpopover_action = __webpack_require__(/*! ./n4/Actions/Header_table/Header_table_DetailPopover.action */ "./build.definitions/n4/Actions/Header_table/Header_table_DetailPopover.action")
let n4_actions_header_table_header_table_updateentity_action = __webpack_require__(/*! ./n4/Actions/Header_table/Header_table_UpdateEntity.action */ "./build.definitions/n4/Actions/Header_table/Header_table_UpdateEntity.action")
let n4_actions_header_table_navtoheader_table_create_action = __webpack_require__(/*! ./n4/Actions/Header_table/NavToHeader_table_Create.action */ "./build.definitions/n4/Actions/Header_table/NavToHeader_table_Create.action")
let n4_actions_header_table_navtoheader_table_createitem_table_action = __webpack_require__(/*! ./n4/Actions/Header_table/NavToHeader_table_CreateItem_table.action */ "./build.definitions/n4/Actions/Header_table/NavToHeader_table_CreateItem_table.action")
let n4_actions_header_table_navtoheader_table_createsupplier_bid_table_action = __webpack_require__(/*! ./n4/Actions/Header_table/NavToHeader_table_CreateSupplier_bid_table.action */ "./build.definitions/n4/Actions/Header_table/NavToHeader_table_CreateSupplier_bid_table.action")
let n4_actions_header_table_navtoheader_table_createsupplier_table_action = __webpack_require__(/*! ./n4/Actions/Header_table/NavToHeader_table_CreateSupplier_table.action */ "./build.definitions/n4/Actions/Header_table/NavToHeader_table_CreateSupplier_table.action")
let n4_actions_header_table_navtoheader_table_detail_action = __webpack_require__(/*! ./n4/Actions/Header_table/NavToHeader_table_Detail.action */ "./build.definitions/n4/Actions/Header_table/NavToHeader_table_Detail.action")
let n4_actions_header_table_navtoheader_table_edit_action = __webpack_require__(/*! ./n4/Actions/Header_table/NavToHeader_table_Edit.action */ "./build.definitions/n4/Actions/Header_table/NavToHeader_table_Edit.action")
let n4_actions_header_table_navtoheader_table_list_action = __webpack_require__(/*! ./n4/Actions/Header_table/NavToHeader_table_List.action */ "./build.definitions/n4/Actions/Header_table/NavToHeader_table_List.action")
let n4_actions_item_table_item_table_createentity_action = __webpack_require__(/*! ./n4/Actions/Item_table/Item_table_CreateEntity.action */ "./build.definitions/n4/Actions/Item_table/Item_table_CreateEntity.action")
let n4_actions_item_table_item_table_deleteentity_action = __webpack_require__(/*! ./n4/Actions/Item_table/Item_table_DeleteEntity.action */ "./build.definitions/n4/Actions/Item_table/Item_table_DeleteEntity.action")
let n4_actions_item_table_item_table_updateentity_action = __webpack_require__(/*! ./n4/Actions/Item_table/Item_table_UpdateEntity.action */ "./build.definitions/n4/Actions/Item_table/Item_table_UpdateEntity.action")
let n4_actions_item_table_navtoitem_table_create_action = __webpack_require__(/*! ./n4/Actions/Item_table/NavToItem_table_Create.action */ "./build.definitions/n4/Actions/Item_table/NavToItem_table_Create.action")
let n4_actions_item_table_navtoitem_table_detail_action = __webpack_require__(/*! ./n4/Actions/Item_table/NavToItem_table_Detail.action */ "./build.definitions/n4/Actions/Item_table/NavToItem_table_Detail.action")
let n4_actions_item_table_navtoitem_table_edit_action = __webpack_require__(/*! ./n4/Actions/Item_table/NavToItem_table_Edit.action */ "./build.definitions/n4/Actions/Item_table/NavToItem_table_Edit.action")
let n4_actions_item_table_navtoitem_table_list_action = __webpack_require__(/*! ./n4/Actions/Item_table/NavToItem_table_List.action */ "./build.definitions/n4/Actions/Item_table/NavToItem_table_List.action")
let n4_actions_lodg_to_login_action = __webpack_require__(/*! ./n4/Actions/lodg_to_login.action */ "./build.definitions/n4/Actions/lodg_to_login.action")
let n4_actions_logging_loguploadfailure_action = __webpack_require__(/*! ./n4/Actions/Logging/LogUploadFailure.action */ "./build.definitions/n4/Actions/Logging/LogUploadFailure.action")
let n4_actions_logging_loguploadsuccessful_action = __webpack_require__(/*! ./n4/Actions/Logging/LogUploadSuccessful.action */ "./build.definitions/n4/Actions/Logging/LogUploadSuccessful.action")
let n4_actions_logging_uploadlog_action = __webpack_require__(/*! ./n4/Actions/Logging/UploadLog.action */ "./build.definitions/n4/Actions/Logging/UploadLog.action")
let n4_actions_logging_uploadlogprogress_action = __webpack_require__(/*! ./n4/Actions/Logging/UploadLogProgress.action */ "./build.definitions/n4/Actions/Logging/UploadLogProgress.action")
let n4_actions_login_to_dshbd_action = __webpack_require__(/*! ./n4/Actions/login_to_dshbd.action */ "./build.definitions/n4/Actions/login_to_dshbd.action")
let n4_actions_login_to_reg_action = __webpack_require__(/*! ./n4/Actions/login_to_reg.action */ "./build.definitions/n4/Actions/login_to_reg.action")
let n4_actions_service_initializeonline_action = __webpack_require__(/*! ./n4/Actions/Service/InitializeOnline.action */ "./build.definitions/n4/Actions/Service/InitializeOnline.action")
let n4_actions_service_initializeonlinefailuremessage_action = __webpack_require__(/*! ./n4/Actions/Service/InitializeOnlineFailureMessage.action */ "./build.definitions/n4/Actions/Service/InitializeOnlineFailureMessage.action")
let n4_actions_service_initializeonlinesuccessmessage_action = __webpack_require__(/*! ./n4/Actions/Service/InitializeOnlineSuccessMessage.action */ "./build.definitions/n4/Actions/Service/InitializeOnlineSuccessMessage.action")
let n4_actions_supplier_bid_table_navtosupplier_bid_table_create_action = __webpack_require__(/*! ./n4/Actions/Supplier_bid_table/NavToSupplier_bid_table_Create.action */ "./build.definitions/n4/Actions/Supplier_bid_table/NavToSupplier_bid_table_Create.action")
let n4_actions_supplier_bid_table_navtosupplier_bid_table_detail_action = __webpack_require__(/*! ./n4/Actions/Supplier_bid_table/NavToSupplier_bid_table_Detail.action */ "./build.definitions/n4/Actions/Supplier_bid_table/NavToSupplier_bid_table_Detail.action")
let n4_actions_supplier_bid_table_navtosupplier_bid_table_edit_action = __webpack_require__(/*! ./n4/Actions/Supplier_bid_table/NavToSupplier_bid_table_Edit.action */ "./build.definitions/n4/Actions/Supplier_bid_table/NavToSupplier_bid_table_Edit.action")
let n4_actions_supplier_bid_table_navtosupplier_bid_table_list_action = __webpack_require__(/*! ./n4/Actions/Supplier_bid_table/NavToSupplier_bid_table_List.action */ "./build.definitions/n4/Actions/Supplier_bid_table/NavToSupplier_bid_table_List.action")
let n4_actions_supplier_bid_table_supplier_bid_table_createentity_action = __webpack_require__(/*! ./n4/Actions/Supplier_bid_table/Supplier_bid_table_CreateEntity.action */ "./build.definitions/n4/Actions/Supplier_bid_table/Supplier_bid_table_CreateEntity.action")
let n4_actions_supplier_bid_table_supplier_bid_table_deleteentity_action = __webpack_require__(/*! ./n4/Actions/Supplier_bid_table/Supplier_bid_table_DeleteEntity.action */ "./build.definitions/n4/Actions/Supplier_bid_table/Supplier_bid_table_DeleteEntity.action")
let n4_actions_supplier_bid_table_supplier_bid_table_updateentity_action = __webpack_require__(/*! ./n4/Actions/Supplier_bid_table/Supplier_bid_table_UpdateEntity.action */ "./build.definitions/n4/Actions/Supplier_bid_table/Supplier_bid_table_UpdateEntity.action")
let n4_actions_supplier_replay_navtosupplier_replay_create_action = __webpack_require__(/*! ./n4/Actions/supplier_replay/NavTosupplier_replay_Create.action */ "./build.definitions/n4/Actions/supplier_replay/NavTosupplier_replay_Create.action")
let n4_actions_supplier_replay_navtosupplier_replay_detail_action = __webpack_require__(/*! ./n4/Actions/supplier_replay/NavTosupplier_replay_Detail.action */ "./build.definitions/n4/Actions/supplier_replay/NavTosupplier_replay_Detail.action")
let n4_actions_supplier_replay_navtosupplier_replay_edit_action = __webpack_require__(/*! ./n4/Actions/supplier_replay/NavTosupplier_replay_Edit.action */ "./build.definitions/n4/Actions/supplier_replay/NavTosupplier_replay_Edit.action")
let n4_actions_supplier_replay_navtosupplier_replay_list_action = __webpack_require__(/*! ./n4/Actions/supplier_replay/NavTosupplier_replay_List.action */ "./build.definitions/n4/Actions/supplier_replay/NavTosupplier_replay_List.action")
let n4_actions_supplier_replay_supplier_replay_createentity_action = __webpack_require__(/*! ./n4/Actions/supplier_replay/supplier_replay_CreateEntity.action */ "./build.definitions/n4/Actions/supplier_replay/supplier_replay_CreateEntity.action")
let n4_actions_supplier_replay_supplier_replay_deleteentity_action = __webpack_require__(/*! ./n4/Actions/supplier_replay/supplier_replay_DeleteEntity.action */ "./build.definitions/n4/Actions/supplier_replay/supplier_replay_DeleteEntity.action")
let n4_actions_supplier_replay_supplier_replay_updateentity_action = __webpack_require__(/*! ./n4/Actions/supplier_replay/supplier_replay_UpdateEntity.action */ "./build.definitions/n4/Actions/supplier_replay/supplier_replay_UpdateEntity.action")
let n4_actions_supplier_table_navtosupplier_table_create_action = __webpack_require__(/*! ./n4/Actions/Supplier_table/NavToSupplier_table_Create.action */ "./build.definitions/n4/Actions/Supplier_table/NavToSupplier_table_Create.action")
let n4_actions_supplier_table_navtosupplier_table_createsupplier_bid_table_action = __webpack_require__(/*! ./n4/Actions/Supplier_table/NavToSupplier_table_CreateSupplier_bid_table.action */ "./build.definitions/n4/Actions/Supplier_table/NavToSupplier_table_CreateSupplier_bid_table.action")
let n4_actions_supplier_table_navtosupplier_table_detail_action = __webpack_require__(/*! ./n4/Actions/Supplier_table/NavToSupplier_table_Detail.action */ "./build.definitions/n4/Actions/Supplier_table/NavToSupplier_table_Detail.action")
let n4_actions_supplier_table_navtosupplier_table_edit_action = __webpack_require__(/*! ./n4/Actions/Supplier_table/NavToSupplier_table_Edit.action */ "./build.definitions/n4/Actions/Supplier_table/NavToSupplier_table_Edit.action")
let n4_actions_supplier_table_navtosupplier_table_list_action = __webpack_require__(/*! ./n4/Actions/Supplier_table/NavToSupplier_table_List.action */ "./build.definitions/n4/Actions/Supplier_table/NavToSupplier_table_List.action")
let n4_actions_supplier_table_supplier_table_createentity_action = __webpack_require__(/*! ./n4/Actions/Supplier_table/Supplier_table_CreateEntity.action */ "./build.definitions/n4/Actions/Supplier_table/Supplier_table_CreateEntity.action")
let n4_actions_supplier_table_supplier_table_createsupplier_bid_table_action = __webpack_require__(/*! ./n4/Actions/Supplier_table/Supplier_table_CreateSupplier_bid_table.action */ "./build.definitions/n4/Actions/Supplier_table/Supplier_table_CreateSupplier_bid_table.action")
let n4_actions_supplier_table_supplier_table_deleteentity_action = __webpack_require__(/*! ./n4/Actions/Supplier_table/Supplier_table_DeleteEntity.action */ "./build.definitions/n4/Actions/Supplier_table/Supplier_table_DeleteEntity.action")
let n4_actions_supplier_table_supplier_table_detailpopover_action = __webpack_require__(/*! ./n4/Actions/Supplier_table/Supplier_table_DetailPopover.action */ "./build.definitions/n4/Actions/Supplier_table/Supplier_table_DetailPopover.action")
let n4_actions_supplier_table_supplier_table_updateentity_action = __webpack_require__(/*! ./n4/Actions/Supplier_table/Supplier_table_UpdateEntity.action */ "./build.definitions/n4/Actions/Supplier_table/Supplier_table_UpdateEntity.action")
let n4_actions_timestamp_navtotimestamp_create_action = __webpack_require__(/*! ./n4/Actions/Timestamp/NavToTimestamp_Create.action */ "./build.definitions/n4/Actions/Timestamp/NavToTimestamp_Create.action")
let n4_actions_timestamp_navtotimestamp_detail_action = __webpack_require__(/*! ./n4/Actions/Timestamp/NavToTimestamp_Detail.action */ "./build.definitions/n4/Actions/Timestamp/NavToTimestamp_Detail.action")
let n4_actions_timestamp_navtotimestamp_edit_action = __webpack_require__(/*! ./n4/Actions/Timestamp/NavToTimestamp_Edit.action */ "./build.definitions/n4/Actions/Timestamp/NavToTimestamp_Edit.action")
let n4_actions_timestamp_navtotimestamp_list_action = __webpack_require__(/*! ./n4/Actions/Timestamp/NavToTimestamp_List.action */ "./build.definitions/n4/Actions/Timestamp/NavToTimestamp_List.action")
let n4_actions_timestamp_timestamp_createentity_action = __webpack_require__(/*! ./n4/Actions/Timestamp/Timestamp_CreateEntity.action */ "./build.definitions/n4/Actions/Timestamp/Timestamp_CreateEntity.action")
let n4_actions_timestamp_timestamp_deleteentity_action = __webpack_require__(/*! ./n4/Actions/Timestamp/Timestamp_DeleteEntity.action */ "./build.definitions/n4/Actions/Timestamp/Timestamp_DeleteEntity.action")
let n4_actions_timestamp_timestamp_updateentity_action = __webpack_require__(/*! ./n4/Actions/Timestamp/Timestamp_UpdateEntity.action */ "./build.definitions/n4/Actions/Timestamp/Timestamp_UpdateEntity.action")
let n4_actions_updateentityfailuremessage_action = __webpack_require__(/*! ./n4/Actions/UpdateEntityFailureMessage.action */ "./build.definitions/n4/Actions/UpdateEntityFailureMessage.action")
let n4_actions_updateentitysuccessmessage_action = __webpack_require__(/*! ./n4/Actions/UpdateEntitySuccessMessage.action */ "./build.definitions/n4/Actions/UpdateEntitySuccessMessage.action")
let n4_actions_validation_action = __webpack_require__(/*! ./n4/Actions/Validation.action */ "./build.definitions/n4/Actions/Validation.action")
let n4_actions_validationfailure_action = __webpack_require__(/*! ./n4/Actions/ValidationFailure.action */ "./build.definitions/n4/Actions/ValidationFailure.action")
let n4_globals_application_appdefinition_version_global = __webpack_require__(/*! ./n4/Globals/Application/AppDefinition_Version.global */ "./build.definitions/n4/Globals/Application/AppDefinition_Version.global")
let n4_globals_application_applicationname_global = __webpack_require__(/*! ./n4/Globals/Application/ApplicationName.global */ "./build.definitions/n4/Globals/Application/ApplicationName.global")
let n4_globals_application_supportemail_global = __webpack_require__(/*! ./n4/Globals/Application/SupportEmail.global */ "./build.definitions/n4/Globals/Application/SupportEmail.global")
let n4_globals_application_supportphone_global = __webpack_require__(/*! ./n4/Globals/Application/SupportPhone.global */ "./build.definitions/n4/Globals/Application/SupportPhone.global")
let n4_i18n_i18n_properties = __webpack_require__(/*! ./n4/i18n/i18n.properties */ "./build.definitions/n4/i18n/i18n.properties")
let n4_images_peol_logo__1__png = __webpack_require__(/*! ./n4/Images/peol_logo (1).png */ "./build.definitions/n4/Images/peol_logo (1).png")
let n4_jsconfig_json = __webpack_require__(/*! ./n4/jsconfig.json */ "./build.definitions/n4/jsconfig.json")
let n4_pages_application_about_page = __webpack_require__(/*! ./n4/Pages/Application/About.page */ "./build.definitions/n4/Pages/Application/About.page")
let n4_pages_application_support_page = __webpack_require__(/*! ./n4/Pages/Application/Support.page */ "./build.definitions/n4/Pages/Application/Support.page")
let n4_pages_application_useractivitylog_page = __webpack_require__(/*! ./n4/Pages/Application/UserActivityLog.page */ "./build.definitions/n4/Pages/Application/UserActivityLog.page")
let n4_pages_bid_reply_bid_reply_create_page = __webpack_require__(/*! ./n4/Pages/Bid_reply/Bid_reply_Create.page */ "./build.definitions/n4/Pages/Bid_reply/Bid_reply_Create.page")
let n4_pages_bid_reply_bid_reply_detail_page = __webpack_require__(/*! ./n4/Pages/Bid_reply/Bid_reply_Detail.page */ "./build.definitions/n4/Pages/Bid_reply/Bid_reply_Detail.page")
let n4_pages_bid_reply_bid_reply_edit_page = __webpack_require__(/*! ./n4/Pages/Bid_reply/Bid_reply_Edit.page */ "./build.definitions/n4/Pages/Bid_reply/Bid_reply_Edit.page")
let n4_pages_bid_reply_bid_reply_list_page = __webpack_require__(/*! ./n4/Pages/Bid_reply/Bid_reply_List.page */ "./build.definitions/n4/Pages/Bid_reply/Bid_reply_List.page")
let n4_pages_demo_page = __webpack_require__(/*! ./n4/Pages/demo.page */ "./build.definitions/n4/Pages/demo.page")
let n4_pages_header_table_header_table_create_page = __webpack_require__(/*! ./n4/Pages/Header_table/Header_table_Create.page */ "./build.definitions/n4/Pages/Header_table/Header_table_Create.page")
let n4_pages_header_table_header_table_createitem_table_page = __webpack_require__(/*! ./n4/Pages/Header_table/Header_table_CreateItem_table.page */ "./build.definitions/n4/Pages/Header_table/Header_table_CreateItem_table.page")
let n4_pages_header_table_header_table_createsupplier_bid_table_page = __webpack_require__(/*! ./n4/Pages/Header_table/Header_table_CreateSupplier_bid_table.page */ "./build.definitions/n4/Pages/Header_table/Header_table_CreateSupplier_bid_table.page")
let n4_pages_header_table_header_table_createsupplier_table_page = __webpack_require__(/*! ./n4/Pages/Header_table/Header_table_CreateSupplier_table.page */ "./build.definitions/n4/Pages/Header_table/Header_table_CreateSupplier_table.page")
let n4_pages_header_table_header_table_detail_page = __webpack_require__(/*! ./n4/Pages/Header_table/Header_table_Detail.page */ "./build.definitions/n4/Pages/Header_table/Header_table_Detail.page")
let n4_pages_header_table_header_table_edit_page = __webpack_require__(/*! ./n4/Pages/Header_table/Header_table_Edit.page */ "./build.definitions/n4/Pages/Header_table/Header_table_Edit.page")
let n4_pages_header_table_header_table_list_page = __webpack_require__(/*! ./n4/Pages/Header_table/Header_table_List.page */ "./build.definitions/n4/Pages/Header_table/Header_table_List.page")
let n4_pages_item_table_item_table_create_page = __webpack_require__(/*! ./n4/Pages/Item_table/Item_table_Create.page */ "./build.definitions/n4/Pages/Item_table/Item_table_Create.page")
let n4_pages_item_table_item_table_detail_page = __webpack_require__(/*! ./n4/Pages/Item_table/Item_table_Detail.page */ "./build.definitions/n4/Pages/Item_table/Item_table_Detail.page")
let n4_pages_item_table_item_table_edit_page = __webpack_require__(/*! ./n4/Pages/Item_table/Item_table_Edit.page */ "./build.definitions/n4/Pages/Item_table/Item_table_Edit.page")
let n4_pages_item_table_item_table_list_page = __webpack_require__(/*! ./n4/Pages/Item_table/Item_table_List.page */ "./build.definitions/n4/Pages/Item_table/Item_table_List.page")
let n4_pages_m_copy_page = __webpack_require__(/*! ./n4/Pages/M copy.page */ "./build.definitions/n4/Pages/M copy.page")
let n4_pages_m_page = __webpack_require__(/*! ./n4/Pages/M.page */ "./build.definitions/n4/Pages/M.page")
let n4_pages_main_page = __webpack_require__(/*! ./n4/Pages/Main.page */ "./build.definitions/n4/Pages/Main.page")
let n4_pages_registration_page = __webpack_require__(/*! ./n4/Pages/Registration.page */ "./build.definitions/n4/Pages/Registration.page")
let n4_pages_supplier_bid_table_supplier_bid_table_create_page = __webpack_require__(/*! ./n4/Pages/Supplier_bid_table/Supplier_bid_table_Create.page */ "./build.definitions/n4/Pages/Supplier_bid_table/Supplier_bid_table_Create.page")
let n4_pages_supplier_bid_table_supplier_bid_table_detail_page = __webpack_require__(/*! ./n4/Pages/Supplier_bid_table/Supplier_bid_table_Detail.page */ "./build.definitions/n4/Pages/Supplier_bid_table/Supplier_bid_table_Detail.page")
let n4_pages_supplier_bid_table_supplier_bid_table_edit_page = __webpack_require__(/*! ./n4/Pages/Supplier_bid_table/Supplier_bid_table_Edit.page */ "./build.definitions/n4/Pages/Supplier_bid_table/Supplier_bid_table_Edit.page")
let n4_pages_supplier_bid_table_supplier_bid_table_list_page = __webpack_require__(/*! ./n4/Pages/Supplier_bid_table/Supplier_bid_table_List.page */ "./build.definitions/n4/Pages/Supplier_bid_table/Supplier_bid_table_List.page")
let n4_pages_supplier_replay_supplier_replay_create_page = __webpack_require__(/*! ./n4/Pages/supplier_replay/supplier_replay_Create.page */ "./build.definitions/n4/Pages/supplier_replay/supplier_replay_Create.page")
let n4_pages_supplier_replay_supplier_replay_detail_page = __webpack_require__(/*! ./n4/Pages/supplier_replay/supplier_replay_Detail.page */ "./build.definitions/n4/Pages/supplier_replay/supplier_replay_Detail.page")
let n4_pages_supplier_replay_supplier_replay_edit_page = __webpack_require__(/*! ./n4/Pages/supplier_replay/supplier_replay_Edit.page */ "./build.definitions/n4/Pages/supplier_replay/supplier_replay_Edit.page")
let n4_pages_supplier_replay_supplier_replay_list_page = __webpack_require__(/*! ./n4/Pages/supplier_replay/supplier_replay_List.page */ "./build.definitions/n4/Pages/supplier_replay/supplier_replay_List.page")
let n4_pages_supplier_table_supplier_table_create_page = __webpack_require__(/*! ./n4/Pages/Supplier_table/Supplier_table_Create.page */ "./build.definitions/n4/Pages/Supplier_table/Supplier_table_Create.page")
let n4_pages_supplier_table_supplier_table_createsupplier_bid_table_page = __webpack_require__(/*! ./n4/Pages/Supplier_table/Supplier_table_CreateSupplier_bid_table.page */ "./build.definitions/n4/Pages/Supplier_table/Supplier_table_CreateSupplier_bid_table.page")
let n4_pages_supplier_table_supplier_table_detail_copy_page = __webpack_require__(/*! ./n4/Pages/Supplier_table/Supplier_table_Detail copy.page */ "./build.definitions/n4/Pages/Supplier_table/Supplier_table_Detail copy.page")
let n4_pages_supplier_table_supplier_table_detail_page = __webpack_require__(/*! ./n4/Pages/Supplier_table/Supplier_table_Detail.page */ "./build.definitions/n4/Pages/Supplier_table/Supplier_table_Detail.page")
let n4_pages_supplier_table_supplier_table_edit_page = __webpack_require__(/*! ./n4/Pages/Supplier_table/Supplier_table_Edit.page */ "./build.definitions/n4/Pages/Supplier_table/Supplier_table_Edit.page")
let n4_pages_supplier_table_supplier_table_list_page = __webpack_require__(/*! ./n4/Pages/Supplier_table/Supplier_table_List.page */ "./build.definitions/n4/Pages/Supplier_table/Supplier_table_List.page")
let n4_pages_timestamp_timestamp_create_page = __webpack_require__(/*! ./n4/Pages/Timestamp/Timestamp_Create.page */ "./build.definitions/n4/Pages/Timestamp/Timestamp_Create.page")
let n4_pages_timestamp_timestamp_detail_page = __webpack_require__(/*! ./n4/Pages/Timestamp/Timestamp_Detail.page */ "./build.definitions/n4/Pages/Timestamp/Timestamp_Detail.page")
let n4_pages_timestamp_timestamp_edit_page = __webpack_require__(/*! ./n4/Pages/Timestamp/Timestamp_Edit.page */ "./build.definitions/n4/Pages/Timestamp/Timestamp_Edit.page")
let n4_pages_timestamp_timestamp_list_page = __webpack_require__(/*! ./n4/Pages/Timestamp/Timestamp_List.page */ "./build.definitions/n4/Pages/Timestamp/Timestamp_List.page")
let n4_rules_application_appupdatefailure_js = __webpack_require__(/*! ./n4/Rules/Application/AppUpdateFailure.js */ "./build.definitions/n4/Rules/Application/AppUpdateFailure.js")
let n4_rules_application_appupdatesuccess_js = __webpack_require__(/*! ./n4/Rules/Application/AppUpdateSuccess.js */ "./build.definitions/n4/Rules/Application/AppUpdateSuccess.js")
let n4_rules_application_clientismultiusermode_js = __webpack_require__(/*! ./n4/Rules/Application/ClientIsMultiUserMode.js */ "./build.definitions/n4/Rules/Application/ClientIsMultiUserMode.js")
let n4_rules_application_getclientsupportversions_js = __webpack_require__(/*! ./n4/Rules/Application/GetClientSupportVersions.js */ "./build.definitions/n4/Rules/Application/GetClientSupportVersions.js")
let n4_rules_application_getclientversion_js = __webpack_require__(/*! ./n4/Rules/Application/GetClientVersion.js */ "./build.definitions/n4/Rules/Application/GetClientVersion.js")
let n4_rules_application_onwillupdate_js = __webpack_require__(/*! ./n4/Rules/Application/OnWillUpdate.js */ "./build.definitions/n4/Rules/Application/OnWillUpdate.js")
let n4_rules_application_resetappsettingsandlogout_js = __webpack_require__(/*! ./n4/Rules/Application/ResetAppSettingsAndLogout.js */ "./build.definitions/n4/Rules/Application/ResetAppSettingsAndLogout.js")
let n4_rules_bid_reply_bid_reply_deleteconfirmation_js = __webpack_require__(/*! ./n4/Rules/Bid_reply/Bid_reply_DeleteConfirmation.js */ "./build.definitions/n4/Rules/Bid_reply/Bid_reply_DeleteConfirmation.js")
let n4_rules_header_table_header_table_deleteconfirmation_js = __webpack_require__(/*! ./n4/Rules/Header_table/Header_table_DeleteConfirmation.js */ "./build.definitions/n4/Rules/Header_table/Header_table_DeleteConfirmation.js")
let n4_rules_item_table_item_table_deleteconfirmation_js = __webpack_require__(/*! ./n4/Rules/Item_table/Item_table_DeleteConfirmation.js */ "./build.definitions/n4/Rules/Item_table/Item_table_DeleteConfirmation.js")
let n4_rules_l_js = __webpack_require__(/*! ./n4/Rules/l.js */ "./build.definitions/n4/Rules/l.js")
let n4_rules_logging_loglevels_js = __webpack_require__(/*! ./n4/Rules/Logging/LogLevels.js */ "./build.definitions/n4/Rules/Logging/LogLevels.js")
let n4_rules_logging_settracecategories_js = __webpack_require__(/*! ./n4/Rules/Logging/SetTraceCategories.js */ "./build.definitions/n4/Rules/Logging/SetTraceCategories.js")
let n4_rules_logging_setuserloglevel_js = __webpack_require__(/*! ./n4/Rules/Logging/SetUserLogLevel.js */ "./build.definitions/n4/Rules/Logging/SetUserLogLevel.js")
let n4_rules_logging_togglelogging_js = __webpack_require__(/*! ./n4/Rules/Logging/ToggleLogging.js */ "./build.definitions/n4/Rules/Logging/ToggleLogging.js")
let n4_rules_logging_tracecategories_js = __webpack_require__(/*! ./n4/Rules/Logging/TraceCategories.js */ "./build.definitions/n4/Rules/Logging/TraceCategories.js")
let n4_rules_logging_userlogsetting_js = __webpack_require__(/*! ./n4/Rules/Logging/UserLogSetting.js */ "./build.definitions/n4/Rules/Logging/UserLogSetting.js")
let n4_rules_supplier_bid_table_supplier_bid_table_deleteconfirmation_js = __webpack_require__(/*! ./n4/Rules/Supplier_bid_table/Supplier_bid_table_DeleteConfirmation.js */ "./build.definitions/n4/Rules/Supplier_bid_table/Supplier_bid_table_DeleteConfirmation.js")
let n4_rules_supplier_replay_supplier_replay_deleteconfirmation_js = __webpack_require__(/*! ./n4/Rules/supplier_replay/supplier_replay_DeleteConfirmation.js */ "./build.definitions/n4/Rules/supplier_replay/supplier_replay_DeleteConfirmation.js")
let n4_rules_supplier_table_supplier_table_deleteconfirmation_js = __webpack_require__(/*! ./n4/Rules/Supplier_table/Supplier_table_DeleteConfirmation.js */ "./build.definitions/n4/Rules/Supplier_table/Supplier_table_DeleteConfirmation.js")
let n4_rules_timestamp_timestamp_deleteconfirmation_js = __webpack_require__(/*! ./n4/Rules/Timestamp/Timestamp_DeleteConfirmation.js */ "./build.definitions/n4/Rules/Timestamp/Timestamp_DeleteConfirmation.js")
let n4_services_ajayurl_service = __webpack_require__(/*! ./n4/Services/ajayurl.service */ "./build.definitions/n4/Services/ajayurl.service")
let n4_styles_styles_css = __webpack_require__(/*! ./n4/Styles/Styles.css */ "./build.definitions/n4/Styles/Styles.css")
let n4_styles_styles_json = __webpack_require__(/*! ./n4/Styles/Styles.json */ "./build.definitions/n4/Styles/Styles.json")
let n4_styles_styles_less = __webpack_require__(/*! ./n4/Styles/Styles.less */ "./build.definitions/n4/Styles/Styles.less")
let n4_styles_styles_nss = __webpack_require__(/*! ./n4/Styles/Styles.nss */ "./build.definitions/n4/Styles/Styles.nss")
let tsconfig_json = __webpack_require__(/*! ./tsconfig.json */ "./build.definitions/tsconfig.json")
let version_mdkbundlerversion = __webpack_require__(/*! ./version.mdkbundlerversion */ "./build.definitions/version.mdkbundlerversion")

module.exports = {
	application_app : application_app,
	n4_actions_application_appupdate_action : n4_actions_application_appupdate_action,
	n4_actions_application_appupdatefailuremessage_action : n4_actions_application_appupdatefailuremessage_action,
	n4_actions_application_appupdateprogressbanner_action : n4_actions_application_appupdateprogressbanner_action,
	n4_actions_application_appupdatesuccessmessage_action : n4_actions_application_appupdatesuccessmessage_action,
	n4_actions_application_logout_action : n4_actions_application_logout_action,
	n4_actions_application_navtoabout_action : n4_actions_application_navtoabout_action,
	n4_actions_application_navtoactivitylog_action : n4_actions_application_navtoactivitylog_action,
	n4_actions_application_navtosupport_action : n4_actions_application_navtosupport_action,
	n4_actions_application_onwillupdate_action : n4_actions_application_onwillupdate_action,
	n4_actions_application_reset_action : n4_actions_application_reset_action,
	n4_actions_application_resetmessage_action : n4_actions_application_resetmessage_action,
	n4_actions_application_usermenupopover_action : n4_actions_application_usermenupopover_action,
	n4_actions_bid_reply_bid_reply_createentity_action : n4_actions_bid_reply_bid_reply_createentity_action,
	n4_actions_bid_reply_bid_reply_deleteentity_action : n4_actions_bid_reply_bid_reply_deleteentity_action,
	n4_actions_bid_reply_bid_reply_updateentity_action : n4_actions_bid_reply_bid_reply_updateentity_action,
	n4_actions_bid_reply_navtobid_reply_create_action : n4_actions_bid_reply_navtobid_reply_create_action,
	n4_actions_bid_reply_navtobid_reply_detail_action : n4_actions_bid_reply_navtobid_reply_detail_action,
	n4_actions_bid_reply_navtobid_reply_edit_action : n4_actions_bid_reply_navtobid_reply_edit_action,
	n4_actions_bid_reply_navtobid_reply_list_action : n4_actions_bid_reply_navtobid_reply_list_action,
	n4_actions_closemodalpage_cancel_action : n4_actions_closemodalpage_cancel_action,
	n4_actions_closemodalpage_complete_action : n4_actions_closemodalpage_complete_action,
	n4_actions_closepage_action : n4_actions_closepage_action,
	n4_actions_createentityfailuremessage_action : n4_actions_createentityfailuremessage_action,
	n4_actions_createentitysuccessmessage_action : n4_actions_createentitysuccessmessage_action,
	n4_actions_deleteconfirmation_action : n4_actions_deleteconfirmation_action,
	n4_actions_deleteentityfailuremessage_action : n4_actions_deleteentityfailuremessage_action,
	n4_actions_deleteentitysuccessmessage_action : n4_actions_deleteentitysuccessmessage_action,
	n4_actions_genericbannermessage_action : n4_actions_genericbannermessage_action,
	n4_actions_genericmessagebox_action : n4_actions_genericmessagebox_action,
	n4_actions_genericnavigation_action : n4_actions_genericnavigation_action,
	n4_actions_generictoastmessage_action : n4_actions_generictoastmessage_action,
	n4_actions_header_table_header_table_createentity_action : n4_actions_header_table_header_table_createentity_action,
	n4_actions_header_table_header_table_createitem_table_action : n4_actions_header_table_header_table_createitem_table_action,
	n4_actions_header_table_header_table_createsupplier_bid_table_action : n4_actions_header_table_header_table_createsupplier_bid_table_action,
	n4_actions_header_table_header_table_createsupplier_table_action : n4_actions_header_table_header_table_createsupplier_table_action,
	n4_actions_header_table_header_table_deleteentity_action : n4_actions_header_table_header_table_deleteentity_action,
	n4_actions_header_table_header_table_detailpopover_action : n4_actions_header_table_header_table_detailpopover_action,
	n4_actions_header_table_header_table_updateentity_action : n4_actions_header_table_header_table_updateentity_action,
	n4_actions_header_table_navtoheader_table_create_action : n4_actions_header_table_navtoheader_table_create_action,
	n4_actions_header_table_navtoheader_table_createitem_table_action : n4_actions_header_table_navtoheader_table_createitem_table_action,
	n4_actions_header_table_navtoheader_table_createsupplier_bid_table_action : n4_actions_header_table_navtoheader_table_createsupplier_bid_table_action,
	n4_actions_header_table_navtoheader_table_createsupplier_table_action : n4_actions_header_table_navtoheader_table_createsupplier_table_action,
	n4_actions_header_table_navtoheader_table_detail_action : n4_actions_header_table_navtoheader_table_detail_action,
	n4_actions_header_table_navtoheader_table_edit_action : n4_actions_header_table_navtoheader_table_edit_action,
	n4_actions_header_table_navtoheader_table_list_action : n4_actions_header_table_navtoheader_table_list_action,
	n4_actions_item_table_item_table_createentity_action : n4_actions_item_table_item_table_createentity_action,
	n4_actions_item_table_item_table_deleteentity_action : n4_actions_item_table_item_table_deleteentity_action,
	n4_actions_item_table_item_table_updateentity_action : n4_actions_item_table_item_table_updateentity_action,
	n4_actions_item_table_navtoitem_table_create_action : n4_actions_item_table_navtoitem_table_create_action,
	n4_actions_item_table_navtoitem_table_detail_action : n4_actions_item_table_navtoitem_table_detail_action,
	n4_actions_item_table_navtoitem_table_edit_action : n4_actions_item_table_navtoitem_table_edit_action,
	n4_actions_item_table_navtoitem_table_list_action : n4_actions_item_table_navtoitem_table_list_action,
	n4_actions_lodg_to_login_action : n4_actions_lodg_to_login_action,
	n4_actions_logging_loguploadfailure_action : n4_actions_logging_loguploadfailure_action,
	n4_actions_logging_loguploadsuccessful_action : n4_actions_logging_loguploadsuccessful_action,
	n4_actions_logging_uploadlog_action : n4_actions_logging_uploadlog_action,
	n4_actions_logging_uploadlogprogress_action : n4_actions_logging_uploadlogprogress_action,
	n4_actions_login_to_dshbd_action : n4_actions_login_to_dshbd_action,
	n4_actions_login_to_reg_action : n4_actions_login_to_reg_action,
	n4_actions_service_initializeonline_action : n4_actions_service_initializeonline_action,
	n4_actions_service_initializeonlinefailuremessage_action : n4_actions_service_initializeonlinefailuremessage_action,
	n4_actions_service_initializeonlinesuccessmessage_action : n4_actions_service_initializeonlinesuccessmessage_action,
	n4_actions_supplier_bid_table_navtosupplier_bid_table_create_action : n4_actions_supplier_bid_table_navtosupplier_bid_table_create_action,
	n4_actions_supplier_bid_table_navtosupplier_bid_table_detail_action : n4_actions_supplier_bid_table_navtosupplier_bid_table_detail_action,
	n4_actions_supplier_bid_table_navtosupplier_bid_table_edit_action : n4_actions_supplier_bid_table_navtosupplier_bid_table_edit_action,
	n4_actions_supplier_bid_table_navtosupplier_bid_table_list_action : n4_actions_supplier_bid_table_navtosupplier_bid_table_list_action,
	n4_actions_supplier_bid_table_supplier_bid_table_createentity_action : n4_actions_supplier_bid_table_supplier_bid_table_createentity_action,
	n4_actions_supplier_bid_table_supplier_bid_table_deleteentity_action : n4_actions_supplier_bid_table_supplier_bid_table_deleteentity_action,
	n4_actions_supplier_bid_table_supplier_bid_table_updateentity_action : n4_actions_supplier_bid_table_supplier_bid_table_updateentity_action,
	n4_actions_supplier_replay_navtosupplier_replay_create_action : n4_actions_supplier_replay_navtosupplier_replay_create_action,
	n4_actions_supplier_replay_navtosupplier_replay_detail_action : n4_actions_supplier_replay_navtosupplier_replay_detail_action,
	n4_actions_supplier_replay_navtosupplier_replay_edit_action : n4_actions_supplier_replay_navtosupplier_replay_edit_action,
	n4_actions_supplier_replay_navtosupplier_replay_list_action : n4_actions_supplier_replay_navtosupplier_replay_list_action,
	n4_actions_supplier_replay_supplier_replay_createentity_action : n4_actions_supplier_replay_supplier_replay_createentity_action,
	n4_actions_supplier_replay_supplier_replay_deleteentity_action : n4_actions_supplier_replay_supplier_replay_deleteentity_action,
	n4_actions_supplier_replay_supplier_replay_updateentity_action : n4_actions_supplier_replay_supplier_replay_updateentity_action,
	n4_actions_supplier_table_navtosupplier_table_create_action : n4_actions_supplier_table_navtosupplier_table_create_action,
	n4_actions_supplier_table_navtosupplier_table_createsupplier_bid_table_action : n4_actions_supplier_table_navtosupplier_table_createsupplier_bid_table_action,
	n4_actions_supplier_table_navtosupplier_table_detail_action : n4_actions_supplier_table_navtosupplier_table_detail_action,
	n4_actions_supplier_table_navtosupplier_table_edit_action : n4_actions_supplier_table_navtosupplier_table_edit_action,
	n4_actions_supplier_table_navtosupplier_table_list_action : n4_actions_supplier_table_navtosupplier_table_list_action,
	n4_actions_supplier_table_supplier_table_createentity_action : n4_actions_supplier_table_supplier_table_createentity_action,
	n4_actions_supplier_table_supplier_table_createsupplier_bid_table_action : n4_actions_supplier_table_supplier_table_createsupplier_bid_table_action,
	n4_actions_supplier_table_supplier_table_deleteentity_action : n4_actions_supplier_table_supplier_table_deleteentity_action,
	n4_actions_supplier_table_supplier_table_detailpopover_action : n4_actions_supplier_table_supplier_table_detailpopover_action,
	n4_actions_supplier_table_supplier_table_updateentity_action : n4_actions_supplier_table_supplier_table_updateentity_action,
	n4_actions_timestamp_navtotimestamp_create_action : n4_actions_timestamp_navtotimestamp_create_action,
	n4_actions_timestamp_navtotimestamp_detail_action : n4_actions_timestamp_navtotimestamp_detail_action,
	n4_actions_timestamp_navtotimestamp_edit_action : n4_actions_timestamp_navtotimestamp_edit_action,
	n4_actions_timestamp_navtotimestamp_list_action : n4_actions_timestamp_navtotimestamp_list_action,
	n4_actions_timestamp_timestamp_createentity_action : n4_actions_timestamp_timestamp_createentity_action,
	n4_actions_timestamp_timestamp_deleteentity_action : n4_actions_timestamp_timestamp_deleteentity_action,
	n4_actions_timestamp_timestamp_updateentity_action : n4_actions_timestamp_timestamp_updateentity_action,
	n4_actions_updateentityfailuremessage_action : n4_actions_updateentityfailuremessage_action,
	n4_actions_updateentitysuccessmessage_action : n4_actions_updateentitysuccessmessage_action,
	n4_actions_validation_action : n4_actions_validation_action,
	n4_actions_validationfailure_action : n4_actions_validationfailure_action,
	n4_globals_application_appdefinition_version_global : n4_globals_application_appdefinition_version_global,
	n4_globals_application_applicationname_global : n4_globals_application_applicationname_global,
	n4_globals_application_supportemail_global : n4_globals_application_supportemail_global,
	n4_globals_application_supportphone_global : n4_globals_application_supportphone_global,
	n4_i18n_i18n_properties : n4_i18n_i18n_properties,
	n4_images_peol_logo__1__png : n4_images_peol_logo__1__png,
	n4_jsconfig_json : n4_jsconfig_json,
	n4_pages_application_about_page : n4_pages_application_about_page,
	n4_pages_application_support_page : n4_pages_application_support_page,
	n4_pages_application_useractivitylog_page : n4_pages_application_useractivitylog_page,
	n4_pages_bid_reply_bid_reply_create_page : n4_pages_bid_reply_bid_reply_create_page,
	n4_pages_bid_reply_bid_reply_detail_page : n4_pages_bid_reply_bid_reply_detail_page,
	n4_pages_bid_reply_bid_reply_edit_page : n4_pages_bid_reply_bid_reply_edit_page,
	n4_pages_bid_reply_bid_reply_list_page : n4_pages_bid_reply_bid_reply_list_page,
	n4_pages_demo_page : n4_pages_demo_page,
	n4_pages_header_table_header_table_create_page : n4_pages_header_table_header_table_create_page,
	n4_pages_header_table_header_table_createitem_table_page : n4_pages_header_table_header_table_createitem_table_page,
	n4_pages_header_table_header_table_createsupplier_bid_table_page : n4_pages_header_table_header_table_createsupplier_bid_table_page,
	n4_pages_header_table_header_table_createsupplier_table_page : n4_pages_header_table_header_table_createsupplier_table_page,
	n4_pages_header_table_header_table_detail_page : n4_pages_header_table_header_table_detail_page,
	n4_pages_header_table_header_table_edit_page : n4_pages_header_table_header_table_edit_page,
	n4_pages_header_table_header_table_list_page : n4_pages_header_table_header_table_list_page,
	n4_pages_item_table_item_table_create_page : n4_pages_item_table_item_table_create_page,
	n4_pages_item_table_item_table_detail_page : n4_pages_item_table_item_table_detail_page,
	n4_pages_item_table_item_table_edit_page : n4_pages_item_table_item_table_edit_page,
	n4_pages_item_table_item_table_list_page : n4_pages_item_table_item_table_list_page,
	n4_pages_m_copy_page : n4_pages_m_copy_page,
	n4_pages_m_page : n4_pages_m_page,
	n4_pages_main_page : n4_pages_main_page,
	n4_pages_registration_page : n4_pages_registration_page,
	n4_pages_supplier_bid_table_supplier_bid_table_create_page : n4_pages_supplier_bid_table_supplier_bid_table_create_page,
	n4_pages_supplier_bid_table_supplier_bid_table_detail_page : n4_pages_supplier_bid_table_supplier_bid_table_detail_page,
	n4_pages_supplier_bid_table_supplier_bid_table_edit_page : n4_pages_supplier_bid_table_supplier_bid_table_edit_page,
	n4_pages_supplier_bid_table_supplier_bid_table_list_page : n4_pages_supplier_bid_table_supplier_bid_table_list_page,
	n4_pages_supplier_replay_supplier_replay_create_page : n4_pages_supplier_replay_supplier_replay_create_page,
	n4_pages_supplier_replay_supplier_replay_detail_page : n4_pages_supplier_replay_supplier_replay_detail_page,
	n4_pages_supplier_replay_supplier_replay_edit_page : n4_pages_supplier_replay_supplier_replay_edit_page,
	n4_pages_supplier_replay_supplier_replay_list_page : n4_pages_supplier_replay_supplier_replay_list_page,
	n4_pages_supplier_table_supplier_table_create_page : n4_pages_supplier_table_supplier_table_create_page,
	n4_pages_supplier_table_supplier_table_createsupplier_bid_table_page : n4_pages_supplier_table_supplier_table_createsupplier_bid_table_page,
	n4_pages_supplier_table_supplier_table_detail_copy_page : n4_pages_supplier_table_supplier_table_detail_copy_page,
	n4_pages_supplier_table_supplier_table_detail_page : n4_pages_supplier_table_supplier_table_detail_page,
	n4_pages_supplier_table_supplier_table_edit_page : n4_pages_supplier_table_supplier_table_edit_page,
	n4_pages_supplier_table_supplier_table_list_page : n4_pages_supplier_table_supplier_table_list_page,
	n4_pages_timestamp_timestamp_create_page : n4_pages_timestamp_timestamp_create_page,
	n4_pages_timestamp_timestamp_detail_page : n4_pages_timestamp_timestamp_detail_page,
	n4_pages_timestamp_timestamp_edit_page : n4_pages_timestamp_timestamp_edit_page,
	n4_pages_timestamp_timestamp_list_page : n4_pages_timestamp_timestamp_list_page,
	n4_rules_application_appupdatefailure_js : n4_rules_application_appupdatefailure_js,
	n4_rules_application_appupdatesuccess_js : n4_rules_application_appupdatesuccess_js,
	n4_rules_application_clientismultiusermode_js : n4_rules_application_clientismultiusermode_js,
	n4_rules_application_getclientsupportversions_js : n4_rules_application_getclientsupportversions_js,
	n4_rules_application_getclientversion_js : n4_rules_application_getclientversion_js,
	n4_rules_application_onwillupdate_js : n4_rules_application_onwillupdate_js,
	n4_rules_application_resetappsettingsandlogout_js : n4_rules_application_resetappsettingsandlogout_js,
	n4_rules_bid_reply_bid_reply_deleteconfirmation_js : n4_rules_bid_reply_bid_reply_deleteconfirmation_js,
	n4_rules_header_table_header_table_deleteconfirmation_js : n4_rules_header_table_header_table_deleteconfirmation_js,
	n4_rules_item_table_item_table_deleteconfirmation_js : n4_rules_item_table_item_table_deleteconfirmation_js,
	n4_rules_l_js : n4_rules_l_js,
	n4_rules_logging_loglevels_js : n4_rules_logging_loglevels_js,
	n4_rules_logging_settracecategories_js : n4_rules_logging_settracecategories_js,
	n4_rules_logging_setuserloglevel_js : n4_rules_logging_setuserloglevel_js,
	n4_rules_logging_togglelogging_js : n4_rules_logging_togglelogging_js,
	n4_rules_logging_tracecategories_js : n4_rules_logging_tracecategories_js,
	n4_rules_logging_userlogsetting_js : n4_rules_logging_userlogsetting_js,
	n4_rules_supplier_bid_table_supplier_bid_table_deleteconfirmation_js : n4_rules_supplier_bid_table_supplier_bid_table_deleteconfirmation_js,
	n4_rules_supplier_replay_supplier_replay_deleteconfirmation_js : n4_rules_supplier_replay_supplier_replay_deleteconfirmation_js,
	n4_rules_supplier_table_supplier_table_deleteconfirmation_js : n4_rules_supplier_table_supplier_table_deleteconfirmation_js,
	n4_rules_timestamp_timestamp_deleteconfirmation_js : n4_rules_timestamp_timestamp_deleteconfirmation_js,
	n4_services_ajayurl_service : n4_services_ajayurl_service,
	n4_styles_styles_css : n4_styles_styles_css,
	n4_styles_styles_json : n4_styles_styles_json,
	n4_styles_styles_less : n4_styles_styles_less,
	n4_styles_styles_nss : n4_styles_styles_nss,
	tsconfig_json : tsconfig_json,
	version_mdkbundlerversion : version_mdkbundlerversion
}

/***/ }),

/***/ "./build.definitions/n4/Rules/Application/AppUpdateFailure.js":
/*!********************************************************************!*\
  !*** ./build.definitions/n4/Rules/Application/AppUpdateFailure.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppUpdateFailure)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function AppUpdateFailure(clientAPI) {
    let result = clientAPI.actionResults.AppUpdate.error.toString();
    var message;
    console.log(result);
    if (result.startsWith('Error: Uncaught app extraction failure:')) {
        result = 'Error: Uncaught app extraction failure:';
    }
    if (result.startsWith('Error: LCMS GET Version Response Error Response Status: 404 | Body: 404 Not Found: Requested route')) {
        result = 'Application instance is not up or running';
    }
    if (result.startsWith('Error: LCMS GET Version Response Error Response Status: 404 | Body')) {
        result = 'Service instance not found.';
    }

    switch (result) {
        case 'Service instance not found.':
            message = 'Mobile App Update feature is not assigned or not running for your application. Please add the Mobile App Update feature, deploy your application, and try again.';
            break;
        case 'Error: LCMS GET Version Response Error Response Status: 404 | Body: Failed to find a matched endpoint':
            message = 'Mobile App Update feature is not assigned to your application. Please add the Mobile App Update feature, deploy your application, and try again.';
            break;
        case 'Error: LCMS GET Version Response failed: Error: Optional(OAuth2Error.tokenRejected: The newly acquired or refreshed token got rejected.)':
            message = 'The Mobile App Update feature is not assigned to your application or there is no Application metadata deployed. Please check your application in Mobile Services and try again.';
            break;
        case 'Error: Uncaught app extraction failure:':
            message = 'Error extracting metadata. Please redeploy and try again.';
            break;
        case 'Application instance is not up or running':
            message = 'Communication failure. Verify that the BindMobileApplicationRoutesToME Application route is running in your BTP space cockpit.';
            break;
        default:
            message = result;
            break;
    }
    return clientAPI.getPageProxy().executeAction({
        "Name": "/n4/Actions/Application/AppUpdateFailureMessage.action",
        "Properties": {
            "Duration": 0,
            "Message": message
        }
    });
}

/***/ }),

/***/ "./build.definitions/n4/Rules/Application/AppUpdateSuccess.js":
/*!********************************************************************!*\
  !*** ./build.definitions/n4/Rules/Application/AppUpdateSuccess.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ AppUpdateSuccess)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function sleep(ms) {
    return (new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve();
        }, ms);
    }));
}
function AppUpdateSuccess(clientAPI) {
    var message;
    // Force a small pause to let the progress banner show in case there is no new version available
    return sleep(500).then(function() {
        let result = clientAPI.actionResults.AppUpdate.data;
        console.log(result);

        let versionNum = result.split(': ')[1];
        if (result.startsWith('Current version is already up to date')) {
            return clientAPI.getPageProxy().executeAction({
                "Name": "/n4/Actions/Application/AppUpdateSuccessMessage.action",
                "Properties": {
                    "Message": `You are already using the latest version: ${versionNum}`,
                    "NumberOfLines": 2
                }
            });
        } else if (result === 'AppUpdate feature is not enabled or no new revision found.') {
            message = 'No Application metadata found. Please deploy your application and try again.';
            return clientAPI.getPageProxy().executeAction({
                "Name": "/n4/Actions/Application/AppUpdateSuccessMessage.action",
                "Properties": {
                    "Duration": 5,
                    "Message": message,
                    "NumberOfLines": 2
                }
            });
        }
    });
}

/***/ }),

/***/ "./build.definitions/n4/Rules/Application/ClientIsMultiUserMode.js":
/*!*************************************************************************!*\
  !*** ./build.definitions/n4/Rules/Application/ClientIsMultiUserMode.js ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ClientIsMultiUserMode)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function ClientIsMultiUserMode(clientAPI) {
    return clientAPI.isAppInMultiUserMode();
}

/***/ }),

/***/ "./build.definitions/n4/Rules/Application/GetClientSupportVersions.js":
/*!****************************************************************************!*\
  !*** ./build.definitions/n4/Rules/Application/GetClientSupportVersions.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetClientSupportVersions)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function GetClientSupportVersions(clientAPI) {
    let versionInfo = clientAPI.getVersionInfo();
    let versionStr = '';
    Object.keys(versionInfo).forEach(function(key, index) {
        // key: the name of the object key
        // index: the ordinal position of the key within the object
        //console.log(`Key: ${key}   Index: ${index}`);
        if (key != 'Application Version') {
            versionStr += `${key}: ${versionInfo[key]}\n`;
        }
    });
    return versionStr;
}

/***/ }),

/***/ "./build.definitions/n4/Rules/Application/GetClientVersion.js":
/*!********************************************************************!*\
  !*** ./build.definitions/n4/Rules/Application/GetClientVersion.js ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ GetClientVersion)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function GetClientVersion(clientAPI) {
    let versionInfo = clientAPI.getVersionInfo();
    if (versionInfo.hasOwnProperty('Application Version')) {
        return versionInfo['Application Version'];
    }
}

/***/ }),

/***/ "./build.definitions/n4/Rules/Application/OnWillUpdate.js":
/*!****************************************************************!*\
  !*** ./build.definitions/n4/Rules/Application/OnWillUpdate.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ OnWillUpdate)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function OnWillUpdate(clientAPI) {
    return clientAPI.executeAction('/n4/Actions/Application/OnWillUpdate.action').then((result) => {
        if (result.data) {
            return Promise.resolve();
        } else {
            return Promise.reject('User Deferred');
        }
    });
}

/***/ }),

/***/ "./build.definitions/n4/Rules/Application/ResetAppSettingsAndLogout.js":
/*!*****************************************************************************!*\
  !*** ./build.definitions/n4/Rules/Application/ResetAppSettingsAndLogout.js ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ResetAppSettingsAndLogout)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function ResetAppSettingsAndLogout(clientAPI) {
    let logger = clientAPI.getLogger();
    let platform = clientAPI.nativescript.platformModule;
    let appSettings = clientAPI.nativescript.appSettingsModule;
    var appId;
    if (platform && (platform.isIOS || platform.isAndroid)) {
        appId = clientAPI.evaluateTargetPath('#Application/#AppData/MobileServiceAppId');
    } else {
        appId = 'WindowsClient';
    }
    try {
        // Remove any other app specific settings
        appSettings.getAllKeys().forEach(key => {
            if (key.substring(0, appId.length) === appId) {
                appSettings.remove(key);
            }
        });
    } catch (err) {
        logger.log(`ERROR: AppSettings cleanup failure - ${err}`, 'ERROR');
    } finally {
        // Logout 
        return clientAPI.getPageProxy().executeAction('/n4/Actions/Application/Reset.action');
    }
}

/***/ }),

/***/ "./build.definitions/n4/Rules/Bid_reply/Bid_reply_DeleteConfirmation.js":
/*!******************************************************************************!*\
  !*** ./build.definitions/n4/Rules/Bid_reply/Bid_reply_DeleteConfirmation.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteConfirmation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function DeleteConfirmation(clientAPI) {
    return clientAPI.executeAction('/n4/Actions/DeleteConfirmation.action').then((result) => {
        if (result.data) {
            return clientAPI.executeAction('/n4/Actions/Bid_reply/Bid_reply_DeleteEntity.action').then(
                (success) => Promise.resolve(success),
                (failure) => Promise.reject('Delete entity failed ' + failure));
        } else {
            return Promise.reject('User Deferred');
        }
    });
}

/***/ }),

/***/ "./build.definitions/n4/Rules/Header_table/Header_table_DeleteConfirmation.js":
/*!************************************************************************************!*\
  !*** ./build.definitions/n4/Rules/Header_table/Header_table_DeleteConfirmation.js ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteConfirmation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function DeleteConfirmation(clientAPI) {
    return clientAPI.executeAction('/n4/Actions/DeleteConfirmation.action').then((result) => {
        if (result.data) {
            return clientAPI.executeAction('/n4/Actions/Header_table/Header_table_DeleteEntity.action').then(
                (success) => Promise.resolve(success),
                (failure) => Promise.reject('Delete entity failed ' + failure));
        } else {
            return Promise.reject('User Deferred');
        }
    });
}

/***/ }),

/***/ "./build.definitions/n4/Rules/Item_table/Item_table_DeleteConfirmation.js":
/*!********************************************************************************!*\
  !*** ./build.definitions/n4/Rules/Item_table/Item_table_DeleteConfirmation.js ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteConfirmation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function DeleteConfirmation(clientAPI) {
    return clientAPI.executeAction('/n4/Actions/DeleteConfirmation.action').then((result) => {
        if (result.data) {
            return clientAPI.executeAction('/n4/Actions/Item_table/Item_table_DeleteEntity.action').then(
                (success) => Promise.resolve(success),
                (failure) => Promise.reject('Delete entity failed ' + failure));
        } else {
            return Promise.reject('User Deferred');
        }
    });
}

/***/ }),

/***/ "./build.definitions/n4/Rules/Logging/LogLevels.js":
/*!*********************************************************!*\
  !*** ./build.definitions/n4/Rules/Logging/LogLevels.js ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ LogLevels)
/* harmony export */ });
function LogLevels(clientAPI) {
    var levels = [];
    levels.push({
        'DisplayValue': 'Error',
        'ReturnValue': 'Error',
    });
    levels.push({
        'DisplayValue': 'Warning',
        'ReturnValue': 'Warn',
    });
    levels.push({
        'DisplayValue': 'Info',
        'ReturnValue': 'Info',
    });
    levels.push({
        'DisplayValue': 'Debug',
        'ReturnValue': 'Debug',
    });
    levels.push({
        'DisplayValue': 'Trace',
        'ReturnValue': 'Trace',
    });
    return levels;
}

/***/ }),

/***/ "./build.definitions/n4/Rules/Logging/SetTraceCategories.js":
/*!******************************************************************!*\
  !*** ./build.definitions/n4/Rules/Logging/SetTraceCategories.js ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SetTraceCategories)
/* harmony export */ });
function SetTraceCategories(clientAPI) {
    var logger = clientAPI.getLogger();
    const sectionedTable = clientAPI.getPageProxy().getControl('SectionedTable');
    const fcsection = sectionedTable.getSection('FormCellSection0');
    const traceCategory = fcsection.getControl('TracingCategoriesListPicker');
    const odataTrace = fcsection.getControl('odataTrace');

    try {
        if (traceCategory.getValue()) {
            var values = traceCategory.getValue();
            var categories = [];

            if (values && values.length) {
                categories = values.map((value) => {
                    return 'mdk.trace.' + value.ReturnValue;
                });
            }
            clientAPI.setDebugSettings(odataTrace.getValue(), true, categories);
        }
    } catch (exception) {
        logger.log(String(exception), 'Error');
        return undefined;
    }
}

/***/ }),

/***/ "./build.definitions/n4/Rules/Logging/SetUserLogLevel.js":
/*!***************************************************************!*\
  !*** ./build.definitions/n4/Rules/Logging/SetUserLogLevel.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SetUserLogLevel)
/* harmony export */ });
function SetUserLogLevel(clientAPI) {
    try {
        if (clientAPI.getValue() && clientAPI.getValue()[0]) {
            var logger = clientAPI.getLogger();
            var listPickerValue = clientAPI.getValue()[0].ReturnValue;
            if (listPickerValue) {
                switch (listPickerValue) {
                    case 'Debug':
                        logger.setLevel('Debug');
                        ShowTraceOptions(clientAPI, false);
                        break;
                    case 'Error':
                        logger.setLevel('Error');
                        ShowTraceOptions(clientAPI, false);
                        break;
                    case 'Warn':
                        logger.setLevel('Warn');
                        ShowTraceOptions(clientAPI, false);
                        break;
                    case 'Info':
                        logger.setLevel('Info');
                        ShowTraceOptions(clientAPI, false);
                        break;
                    case 'Trace':
                        logger.setLevel('Trace');
                        ShowTraceOptions(clientAPI, true);
                        break;
                    default:
                        // eslint-disable-next-line no-console
                        console.log(`unrecognized key ${listPickerValue}`);
                }
                return listPickerValue;
            }
        }
    } catch (exception) {
        logger.log(String(exception), 'Error');
        return undefined;
    }
}

function ShowTraceOptions(clientAPI, tracingEnabled) {
    let categories = clientAPI.getPageProxy().getControl('SectionedTable').getControl('TracingCategoriesListPicker');
    let odataTrace = clientAPI.getPageProxy().getControl('SectionedTable').getControl('odataTrace');

    categories.setVisible(tracingEnabled);
    odataTrace.setVisible(tracingEnabled);
}

/***/ }),

/***/ "./build.definitions/n4/Rules/Logging/ToggleLogging.js":
/*!*************************************************************!*\
  !*** ./build.definitions/n4/Rules/Logging/ToggleLogging.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ToggleLogging)
/* harmony export */ });
function ToggleLogging(clientAPI) {
    try {
        var logger = clientAPI.getLogger();
        const sectionedTable = clientAPI.getPageProxy().getControl('SectionedTable');
        const fcsection = sectionedTable.getSection('FormCellSection0');
        const enableLogSwitch = fcsection.getControl('EnableLogSwitch');
        const logLevelListPicker = fcsection.getControl('LogLevelListPicker');
        let switchValue = enableLogSwitch.getValue();
        if (switchValue) {
            logger.on();
            logLevelListPicker.setVisible(true);
            logLevelListPicker.setEditable(true);
            logLevelListPicker.redraw();
        } else {
            logger.off();
            logLevelListPicker.setEditable(false);
            logLevelListPicker.setVisible(false);
            logLevelListPicker.redraw();
        }
        return switchValue;
    } catch (exception) {
        logger.log(String(exception), 'Error');
        return undefined;
    }
}

/***/ }),

/***/ "./build.definitions/n4/Rules/Logging/TraceCategories.js":
/*!***************************************************************!*\
  !*** ./build.definitions/n4/Rules/Logging/TraceCategories.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TraceCategories)
/* harmony export */ });
function TraceCategories(clientAPI) {
    var categories = ['action', 'api', 'app', 'binding', 'branding',
        'core', 'i18n', 'lcms', 'logging', 'odata', 'onboarding', 'profiling', 'push',
        'restservice', 'settings', 'targetpath', 'ui'
    ];

    var values = [];
    categories.forEach((category) => {
        values.push({
            'DisplayValue': category,
            'ReturnValue': category,
        });
    });

    return values;
}

/***/ }),

/***/ "./build.definitions/n4/Rules/Logging/UserLogSetting.js":
/*!**************************************************************!*\
  !*** ./build.definitions/n4/Rules/Logging/UserLogSetting.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UserLogSetting)
/* harmony export */ });
function UserLogSetting(clientAPI) {

    try {
        var logger = clientAPI.getLogger();

        const sectionedTable = clientAPI.getControl('SectionedTable');
        const fcsection = sectionedTable.getSection('FormCellSection0');
        const enableLogSwitch = fcsection.getControl('EnableLogSwitch');
        const logLevelListPicker = fcsection.getControl('LogLevelListPicker');
        const traceCategory = fcsection.getControl('TracingCategoriesListPicker');
        const odataTrace = fcsection.getControl('odataTrace');


        //Persist the user logging preferences
        if (logger) {
            console.log("in logger state");
            if (logger.isTurnedOn()) {
                if (enableLogSwitch) {
                    enableLogSwitch.setValue(true);
                }
                if (logLevelListPicker) {
                    logLevelListPicker.setEditable(true);
                }
            } else {
                if (enableLogSwitch) {
                    enableLogSwitch.setValue(false);
                }
                if (logLevelListPicker) {
                    logLevelListPicker.setEditable(false);
                }
            }
            var logLevel = logger.getLevel();
            if (logLevel) {
                if (logLevelListPicker) {
                    logLevelListPicker.setValue([logLevel]);
                }
            }
            if (logLevel === 'Trace') {
                traceCategory.setVisible(true);
                odataTrace.setVisible(true);
            }

            //Upon selecting a value in the List picker and clicking the back button 
            //will enable the onload page rule. This will set the selected value
            //in the control
            if (logLevelListPicker.getValue()[0]) {
                var returnValue = logLevelListPicker.getValue()[0].ReturnValue;
                if (returnValue) {
                    logLevelListPicker.setValue([returnValue]);
                    logger.setLevel(returnValue);
                }
            }
        }
    } catch (exception) {
        // eslint-disable-next-line no-console
        console.log(String(exception), 'Error User Logger could not be set');
    }
}

/***/ }),

/***/ "./build.definitions/n4/Rules/Supplier_bid_table/Supplier_bid_table_DeleteConfirmation.js":
/*!************************************************************************************************!*\
  !*** ./build.definitions/n4/Rules/Supplier_bid_table/Supplier_bid_table_DeleteConfirmation.js ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteConfirmation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function DeleteConfirmation(clientAPI) {
    return clientAPI.executeAction('/n4/Actions/DeleteConfirmation.action').then((result) => {
        if (result.data) {
            return clientAPI.executeAction('/n4/Actions/Supplier_bid_table/Supplier_bid_table_DeleteEntity.action').then(
                (success) => Promise.resolve(success),
                (failure) => Promise.reject('Delete entity failed ' + failure));
        } else {
            return Promise.reject('User Deferred');
        }
    });
}

/***/ }),

/***/ "./build.definitions/n4/Rules/Supplier_table/Supplier_table_DeleteConfirmation.js":
/*!****************************************************************************************!*\
  !*** ./build.definitions/n4/Rules/Supplier_table/Supplier_table_DeleteConfirmation.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteConfirmation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function DeleteConfirmation(clientAPI) {
    return clientAPI.executeAction('/n4/Actions/DeleteConfirmation.action').then((result) => {
        if (result.data) {
            return clientAPI.executeAction('/n4/Actions/Supplier_table/Supplier_table_DeleteEntity.action').then(
                (success) => Promise.resolve(success),
                (failure) => Promise.reject('Delete entity failed ' + failure));
        } else {
            return Promise.reject('User Deferred');
        }
    });
}

/***/ }),

/***/ "./build.definitions/n4/Rules/Timestamp/Timestamp_DeleteConfirmation.js":
/*!******************************************************************************!*\
  !*** ./build.definitions/n4/Rules/Timestamp/Timestamp_DeleteConfirmation.js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteConfirmation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function DeleteConfirmation(clientAPI) {
    return clientAPI.executeAction('/n4/Actions/DeleteConfirmation.action').then((result) => {
        if (result.data) {
            return clientAPI.executeAction('/n4/Actions/Timestamp/Timestamp_DeleteEntity.action').then(
                (success) => Promise.resolve(success),
                (failure) => Promise.reject('Delete entity failed ' + failure));
        } else {
            return Promise.reject('User Deferred');
        }
    });
}

/***/ }),

/***/ "./build.definitions/n4/Rules/l.js":
/*!*****************************************!*\
  !*** ./build.definitions/n4/Rules/l.js ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ l)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function l(clientAPI) {
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


/***/ }),

/***/ "./build.definitions/n4/Rules/supplier_replay/supplier_replay_DeleteConfirmation.js":
/*!******************************************************************************************!*\
  !*** ./build.definitions/n4/Rules/supplier_replay/supplier_replay_DeleteConfirmation.js ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ DeleteConfirmation)
/* harmony export */ });
/**
 * Describe this function...
 * @param {IClientAPI} clientAPI
 */
function DeleteConfirmation(clientAPI) {
    return clientAPI.executeAction('/n4/Actions/DeleteConfirmation.action').then((result) => {
        if (result.data) {
            return clientAPI.executeAction('/n4/Actions/supplier_replay/supplier_replay_DeleteEntity.action').then(
                (success) => Promise.resolve(success),
                (failure) => Promise.reject('Delete entity failed ' + failure));
        } else {
            return Promise.reject('User Deferred');
        }
    });
}

/***/ }),

/***/ "./build.definitions/n4/Styles/Styles.css":
/*!************************************************!*\
  !*** ./build.definitions/n4/Styles/Styles.css ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/sourceMaps.js */ "../../../../css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "../../../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.

Examples:

@mdkYellow1: #ffbb33;
@mdkRed1: #ff0000;

//// By-Type style: All Pages in the application will now have a yellow background
div.MDKPage

{ background-color: @mdkYellow1; }
//// By-Name style: All Buttons with _Name == "BlueButton" will now have this style
#BlueButton

{ color: @mdkYellow1; background-color: #0000FF; }
//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function

.MyButton

{ color: @mdkYellow1; background-color: @mdkRed1; }
*/
ui5-mdk-bar.actionbar {
  color: #ffffff;
  background-color: #51abf1;
}
ui5-mdk-overflow-toolbar.toolbar {
  color: #ffffff;
  background-color: #51abf1;
}
.button1 {
  background-color: #51abf1;
  color: #ffffff;
  font-typeface: bold;
  font-size: 16px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
}
.header1 {
  text-align-last: center;
}
.label1 {
  text-align: center;
}
.MYINFO {
  text-align: center;
}
.rbutton1 {
  border: 1px solid black;
  border: 2px solid #007bff;
  color: #f3f7f9;
  font-size: 26px;
  padding: 10px 20px;
  background-color: #7d9cb5;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
  border-top-right-radius: 20px;
  border-top-left-radius: 20px;
}
.ui5-textarea.nfcValue {
  background-color: #cfcfe6;
  color: black;
  font-style: body;
  font-typeface: bold;
  font-size: 24px;
}
.Form {
  color: black;
  font-style: body;
  font-typeface: bold;
  font-size: 26px;
}
.Formm {
  color: #7575d4;
  font-style: bold;
  font-size: 26px;
  text-align-last: center;
  text-align: center;
}
.fr {
  background-color: #d7d7e9;
  border-radius: 50%;
}
.AdditionalTextStyle {
  background-color: #d7d7e9;
  color: black;
  font-size: 20px;
}
.f {
  text-align-last: center;
}
.ff {
  border-radius: 75;
  border-bottom-left-radius: 20;
  border-bottom-right-radius: 20;
  text-align-last: center;
  font-size: 8x;
}
.e {
  text-align-last: center;
  color: #7575d4;
  font-size: 11px;
}
.t {
  border-radius: 20%;
}
MDKPage {
  color: #0d0d0e;
  background-color: #eeeefd;
}
`, "",{"version":3,"sources":["webpack://./build.definitions/n4/Styles/Styles.css"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;CAoBC;AACD;EACE,cAAc;EACd,yBAAyB;AAC3B;AACA;EACE,cAAc;EACd,yBAAyB;AAC3B;AACA;EACE,yBAAyB;EACzB,cAAc;EACd,mBAAmB;EACnB,eAAe;EACf,+BAA+B;EAC/B,gCAAgC;EAChC,6BAA6B;EAC7B,4BAA4B;AAC9B;AACA;EACE,uBAAuB;AACzB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,uBAAuB;EACvB,yBAAyB;EACzB,cAAc;EACd,eAAe;EACf,kBAAkB;EAClB,yBAAyB;EACzB,+BAA+B;EAC/B,gCAAgC;EAChC,6BAA6B;EAC7B,4BAA4B;AAC9B;AACA;EACE,yBAAyB;EACzB,YAAY;EACZ,gBAAgB;EAChB,mBAAmB;EACnB,eAAe;AACjB;AACA;EACE,YAAY;EACZ,gBAAgB;EAChB,mBAAmB;EACnB,eAAe;AACjB;AACA;EACE,cAAc;EACd,gBAAgB;EAChB,eAAe;EACf,uBAAuB;EACvB,kBAAkB;AACpB;AACA;EACE,yBAAyB;EACzB,kBAAkB;AACpB;AACA;EACE,yBAAyB;EACzB,YAAY;EACZ,eAAe;AACjB;AACA;EACE,uBAAuB;AACzB;AACA;EACE,iBAAiB;EACjB,6BAA6B;EAC7B,8BAA8B;EAC9B,uBAAuB;EACvB,aAAa;AACf;AACA;EACE,uBAAuB;EACvB,cAAc;EACd,eAAe;AACjB;AACA;EACE,kBAAkB;AACpB;AACA;EACE,cAAc;EACd,yBAAyB;AAC3B","sourcesContent":["/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.\n\nExamples:\n\n@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n\n//// By-Type style: All Pages in the application will now have a yellow background\ndiv.MDKPage\n\n{ background-color: @mdkYellow1; }\n//// By-Name style: All Buttons with _Name == \"BlueButton\" will now have this style\n#BlueButton\n\n{ color: @mdkYellow1; background-color: #0000FF; }\n//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function\n\n.MyButton\n\n{ color: @mdkYellow1; background-color: @mdkRed1; }\n*/\nui5-mdk-bar.actionbar {\n  color: #ffffff;\n  background-color: #51abf1;\n}\nui5-mdk-overflow-toolbar.toolbar {\n  color: #ffffff;\n  background-color: #51abf1;\n}\n.button1 {\n  background-color: #51abf1;\n  color: #ffffff;\n  font-typeface: bold;\n  font-size: 16px;\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n  border-top-right-radius: 20px;\n  border-top-left-radius: 20px;\n}\n.header1 {\n  text-align-last: center;\n}\n.label1 {\n  text-align: center;\n}\n.MYINFO {\n  text-align: center;\n}\n.rbutton1 {\n  border: 1px solid black;\n  border: 2px solid #007bff;\n  color: #f3f7f9;\n  font-size: 26px;\n  padding: 10px 20px;\n  background-color: #7d9cb5;\n  border-bottom-left-radius: 20px;\n  border-bottom-right-radius: 20px;\n  border-top-right-radius: 20px;\n  border-top-left-radius: 20px;\n}\n.ui5-textarea.nfcValue {\n  background-color: #cfcfe6;\n  color: black;\n  font-style: body;\n  font-typeface: bold;\n  font-size: 24px;\n}\n.Form {\n  color: black;\n  font-style: body;\n  font-typeface: bold;\n  font-size: 26px;\n}\n.Formm {\n  color: #7575d4;\n  font-style: bold;\n  font-size: 26px;\n  text-align-last: center;\n  text-align: center;\n}\n.fr {\n  background-color: #d7d7e9;\n  border-radius: 50%;\n}\n.AdditionalTextStyle {\n  background-color: #d7d7e9;\n  color: black;\n  font-size: 20px;\n}\n.f {\n  text-align-last: center;\n}\n.ff {\n  border-radius: 75;\n  border-bottom-left-radius: 20;\n  border-bottom-right-radius: 20;\n  text-align-last: center;\n  font-size: 8x;\n}\n.e {\n  text-align-last: center;\n  color: #7575d4;\n  font-size: 11px;\n}\n.t {\n  border-radius: 20%;\n}\nMDKPage {\n  color: #0d0d0e;\n  background-color: #eeeefd;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/n4/Styles/Styles.less":
/*!*************************************************!*\
  !*** ./build.definitions/n4/Styles/Styles.less ***!
  \*************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/sourceMaps.js */ "../../../../css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "../../../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.

Examples:

@mdkYellow1: #ffbb33;
@mdkRed1: #ff0000;

//// By-Type style: All Pages in the application will now have a yellow background
Page

{ background-color: @mdkYellow1; }
//// By-Name style: All Buttons with _Name == "BlueButton" will now have this style
#BlueButton

{ color: @mdkYellow1; background-color: #0000FF; }
//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function

.MyButton

{ color: @mdkYellow1; background-color: @mdkRed1; }
*/
ActionBar {
    color: rgb(255, 255, 255);
    background-color:#51abf1;
}
Toolbar {
  color: rgb(255, 255, 255);
  background-color:#51abf1;
}

.button1{
   
    background-color: #51abf1; 
    color: rgb(255, 255, 255);
    font-typeface: bold; 
    font-size: 16px;
    border-bottom-left-radius: 20px;
    border-bottom-right-radius: 20px;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    
    
  }
 
 
  .header1{
   text-align-last: center;
  }


 .label1{
   text-align: center;
 }
 .MYINFO{
   text-align: center; 
 }

 
 .rbutton1{
   border: 1px solid black;
     border: 2px solid #007bff;
     color: rgb(243, 247, 249);
     font-size: 26px;
     padding: 10px 20px;
     background-color: rgb(125, 156, 181); 
     border-bottom-left-radius: 20px;
     border-bottom-right-radius: 20px;
     border-top-right-radius: 20px;
     border-top-left-radius: 20px;
 }




   .NoteFormCellValue {
    background-color: #cfcfe6; 
    color: black;
    font-style: body;  
    font-typeface: bold;  
    font-size: 24px;
  }
  .Form{
   
    color: black;
    font-style: body; 
    font-typeface: bold;  
    font-size: 26px;
  }
  .Formm{
    color: rgb(117, 117, 212);
    font-style: bold;           
    font-size: 26px;
    text-align-last: center;
    text-align: center
  }

  .fr{
    background-color: rgb(215, 215, 233);  
    border-radius: 50%
  }
  .AdditionalTextStyle {
    background-color: rgb(215, 215, 233); 
    color:black;          
    font-size: 20px;
}
.f{
  text-align-last: center; 
}

.ff{
  border-radius: 75;
border-bottom-left-radius: 20;
border-bottom-right-radius: 20;
text-align-last: center;           
font-size: 8x;
}

.e{
  text-align-last: center;
  color: rgb(117, 117, 212);  
  font-size: 11px;
}
.t{
  border-radius: 20%; 
}

MDKPage {
  color: rgb(13, 13, 14); 
  background-color: rgb(238, 238, 253);
}`, "",{"version":3,"sources":["webpack://./build.definitions/n4/Styles/Styles.less"],"names":[],"mappings":"AAAA;;;;;;;;;;;;;;;;;;;;CAoBC;AACD;IACI,yBAAyB;IACzB,wBAAwB;AAC5B;AACA;EACE,yBAAyB;EACzB,wBAAwB;AAC1B;;AAEA;;IAEI,yBAAyB;IACzB,yBAAyB;IACzB,mBAAmB;IACnB,eAAe;IACf,+BAA+B;IAC/B,gCAAgC;IAChC,6BAA6B;IAC7B,4BAA4B;;;EAG9B;;;EAGA;GACC,uBAAuB;EACxB;;;CAGD;GACE,kBAAkB;CACpB;CACA;GACE,kBAAkB;CACpB;;;CAGA;GACE,uBAAuB;KACrB,yBAAyB;KACzB,yBAAyB;KACzB,eAAe;KACf,kBAAkB;KAClB,oCAAoC;KACpC,+BAA+B;KAC/B,gCAAgC;KAChC,6BAA6B;KAC7B,4BAA4B;CAChC;;;;;GAKE;IACC,yBAAyB;IACzB,YAAY;IACZ,gBAAgB;IAChB,mBAAmB;IACnB,eAAe;EACjB;EACA;;IAEE,YAAY;IACZ,gBAAgB;IAChB,mBAAmB;IACnB,eAAe;EACjB;EACA;IACE,yBAAyB;IACzB,gBAAgB;IAChB,eAAe;IACf,uBAAuB;IACvB;EACF;;EAEA;IACE,oCAAoC;IACpC;EACF;EACA;IACE,oCAAoC;IACpC,WAAW;IACX,eAAe;AACnB;AACA;EACE,uBAAuB;AACzB;;AAEA;EACE,iBAAiB;AACnB,6BAA6B;AAC7B,8BAA8B;AAC9B,uBAAuB;AACvB,aAAa;AACb;;AAEA;EACE,uBAAuB;EACvB,yBAAyB;EACzB,eAAe;AACjB;AACA;EACE,kBAAkB;AACpB;;AAEA;EACE,sBAAsB;EACtB,oCAAoC;AACtC","sourcesContent":["/* The LESS stylesheet provides the ability to define styling styles that can be used to style the UI in the MDK app.\n\nExamples:\n\n@mdkYellow1: #ffbb33;\n@mdkRed1: #ff0000;\n\n//// By-Type style: All Pages in the application will now have a yellow background\nPage\n\n{ background-color: @mdkYellow1; }\n//// By-Name style: All Buttons with _Name == \"BlueButton\" will now have this style\n#BlueButton\n\n{ color: @mdkYellow1; background-color: #0000FF; }\n//// By-Class style: These style classes can be referenced from rules and set using ClientAPI setStyle function\n\n.MyButton\n\n{ color: @mdkYellow1; background-color: @mdkRed1; }\n*/\nActionBar {\n    color: rgb(255, 255, 255);\n    background-color:#51abf1;\n}\nToolbar {\n  color: rgb(255, 255, 255);\n  background-color:#51abf1;\n}\n\n.button1{\n   \n    background-color: #51abf1; \n    color: rgb(255, 255, 255);\n    font-typeface: bold; \n    font-size: 16px;\n    border-bottom-left-radius: 20px;\n    border-bottom-right-radius: 20px;\n    border-top-right-radius: 20px;\n    border-top-left-radius: 20px;\n    \n    \n  }\n \n \n  .header1{\n   text-align-last: center;\n  }\n\n\n .label1{\n   text-align: center;\n }\n .MYINFO{\n   text-align: center; \n }\n\n \n .rbutton1{\n   border: 1px solid black;\n     border: 2px solid #007bff;\n     color: rgb(243, 247, 249);\n     font-size: 26px;\n     padding: 10px 20px;\n     background-color: rgb(125, 156, 181); \n     border-bottom-left-radius: 20px;\n     border-bottom-right-radius: 20px;\n     border-top-right-radius: 20px;\n     border-top-left-radius: 20px;\n }\n\n\n\n\n   .NoteFormCellValue {\n    background-color: #cfcfe6; \n    color: black;\n    font-style: body;  \n    font-typeface: bold;  \n    font-size: 24px;\n  }\n  .Form{\n   \n    color: black;\n    font-style: body; \n    font-typeface: bold;  \n    font-size: 26px;\n  }\n  .Formm{\n    color: rgb(117, 117, 212);\n    font-style: bold;           \n    font-size: 26px;\n    text-align-last: center;\n    text-align: center\n  }\n\n  .fr{\n    background-color: rgb(215, 215, 233);  \n    border-radius: 50%\n  }\n  .AdditionalTextStyle {\n    background-color: rgb(215, 215, 233); \n    color:black;          \n    font-size: 20px;\n}\n.f{\n  text-align-last: center; \n}\n\n.ff{\n  border-radius: 75;\nborder-bottom-left-radius: 20;\nborder-bottom-right-radius: 20;\ntext-align-last: center;           \nfont-size: 8x;\n}\n\n.e{\n  text-align-last: center;\n  color: rgb(117, 117, 212);  \n  font-size: 11px;\n}\n.t{\n  border-radius: 20%; \n}\n\nMDKPage {\n  color: rgb(13, 13, 14); \n  background-color: rgb(238, 238, 253);\n}"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "./build.definitions/n4/Styles/Styles.nss":
/*!************************************************!*\
  !*** ./build.definitions/n4/Styles/Styles.nss ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

// Imports
var ___CSS_LOADER_API_SOURCEMAP_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/sourceMaps.js */ "../../../../css-loader/dist/runtime/sourceMaps.js");
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../../../../../css-loader/dist/runtime/api.js */ "../../../../css-loader/dist/runtime/api.js");
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `ActionBar {
	font-color: #ffffff;
	background-color: #51abf1;
}
button1 {
	background-color: #51abf1;
	font-color: #ffffff;
	font-typeface: bold;
	font-size: 16px;
	border-bottom-left-radius: 20px;
	border-bottom-right-radius: 20px;
	border-top-right-radius: 20px;
	border-top-left-radius: 20px;
}
header1 {
	text-align-last: center;
}
label1 {
	text-align: center;
}
MYINFO {
	text-align: center;
}
rbutton1 {
	border: 1px solid black;
	border: 2px solid #007bff;
	font-color: #f3f7f9;
	font-size: 26px;
	padding: 10px 20px;
	background-color: #7d9cb5;
	border-bottom-left-radius: 20px;
	border-bottom-right-radius: 20px;
	border-top-right-radius: 20px;
	border-top-left-radius: 20px;
}
NoteFormCellValue {
	background-color: #cfcfe6;
	font-color: black;
	font-style: body;
	font-typeface: bold;
	font-size: 24px;
}
Form {
	font-color: black;
	font-style: body;
	font-typeface: bold;
	font-size: 26px;
}
Formm {
	font-color: #7575d4;
	font-style: bold;
	font-size: 26px;
	text-align-last: center;
	text-align: center;
}
fr {
	background-color: #d7d7e9;
	border-radius: 50%;
}
AdditionalTextStyle {
	background-color: #d7d7e9;
	font-color: black;
	font-size: 20px;
}
f {
	text-align-last: center;
}
ff {
	border-radius: 75;
	border-bottom-left-radius: 20;
	border-bottom-right-radius: 20;
	text-align-last: center;
	font-size: 8x;
}
e {
	text-align-last: center;
	font-color: #7575d4;
	font-size: 11px;
}
t {
	border-radius: 20%;
}
`, "",{"version":3,"sources":["webpack://./build.definitions/n4/Styles/Styles.nss"],"names":[],"mappings":"AAAA;CACC,mBAAmB;CACnB,yBAAyB;AAC1B;AACA;CACC,yBAAyB;CACzB,mBAAmB;CACnB,mBAAmB;CACnB,eAAe;CACf,+BAA+B;CAC/B,gCAAgC;CAChC,6BAA6B;CAC7B,4BAA4B;AAC7B;AACA;CACC,uBAAuB;AACxB;AACA;CACC,kBAAkB;AACnB;AACA;CACC,kBAAkB;AACnB;AACA;CACC,uBAAuB;CACvB,yBAAyB;CACzB,mBAAmB;CACnB,eAAe;CACf,kBAAkB;CAClB,yBAAyB;CACzB,+BAA+B;CAC/B,gCAAgC;CAChC,6BAA6B;CAC7B,4BAA4B;AAC7B;AACA;CACC,yBAAyB;CACzB,iBAAiB;CACjB,gBAAgB;CAChB,mBAAmB;CACnB,eAAe;AAChB;AACA;CACC,iBAAiB;CACjB,gBAAgB;CAChB,mBAAmB;CACnB,eAAe;AAChB;AACA;CACC,mBAAmB;CACnB,gBAAgB;CAChB,eAAe;CACf,uBAAuB;CACvB,kBAAkB;AACnB;AACA;CACC,yBAAyB;CACzB,kBAAkB;AACnB;AACA;CACC,yBAAyB;CACzB,iBAAiB;CACjB,eAAe;AAChB;AACA;CACC,uBAAuB;AACxB;AACA;CACC,iBAAiB;CACjB,6BAA6B;CAC7B,8BAA8B;CAC9B,uBAAuB;CACvB,aAAa;AACd;AACA;CACC,uBAAuB;CACvB,mBAAmB;CACnB,eAAe;AAChB;AACA;CACC,kBAAkB;AACnB","sourcesContent":["ActionBar {\n\tfont-color: #ffffff;\n\tbackground-color: #51abf1;\n}\nbutton1 {\n\tbackground-color: #51abf1;\n\tfont-color: #ffffff;\n\tfont-typeface: bold;\n\tfont-size: 16px;\n\tborder-bottom-left-radius: 20px;\n\tborder-bottom-right-radius: 20px;\n\tborder-top-right-radius: 20px;\n\tborder-top-left-radius: 20px;\n}\nheader1 {\n\ttext-align-last: center;\n}\nlabel1 {\n\ttext-align: center;\n}\nMYINFO {\n\ttext-align: center;\n}\nrbutton1 {\n\tborder: 1px solid black;\n\tborder: 2px solid #007bff;\n\tfont-color: #f3f7f9;\n\tfont-size: 26px;\n\tpadding: 10px 20px;\n\tbackground-color: #7d9cb5;\n\tborder-bottom-left-radius: 20px;\n\tborder-bottom-right-radius: 20px;\n\tborder-top-right-radius: 20px;\n\tborder-top-left-radius: 20px;\n}\nNoteFormCellValue {\n\tbackground-color: #cfcfe6;\n\tfont-color: black;\n\tfont-style: body;\n\tfont-typeface: bold;\n\tfont-size: 24px;\n}\nForm {\n\tfont-color: black;\n\tfont-style: body;\n\tfont-typeface: bold;\n\tfont-size: 26px;\n}\nFormm {\n\tfont-color: #7575d4;\n\tfont-style: bold;\n\tfont-size: 26px;\n\ttext-align-last: center;\n\ttext-align: center;\n}\nfr {\n\tbackground-color: #d7d7e9;\n\tborder-radius: 50%;\n}\nAdditionalTextStyle {\n\tbackground-color: #d7d7e9;\n\tfont-color: black;\n\tfont-size: 20px;\n}\nf {\n\ttext-align-last: center;\n}\nff {\n\tborder-radius: 75;\n\tborder-bottom-left-radius: 20;\n\tborder-bottom-right-radius: 20;\n\ttext-align-last: center;\n\tfont-size: 8x;\n}\ne {\n\ttext-align-last: center;\n\tfont-color: #7575d4;\n\tfont-size: 11px;\n}\nt {\n\tborder-radius: 20%;\n}\n"],"sourceRoot":""}]);
// Exports
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ "../../../../css-loader/dist/runtime/api.js":
/*!**************************************************!*\
  !*** ../../../../css-loader/dist/runtime/api.js ***!
  \**************************************************/
/***/ ((module) => {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "../../../../css-loader/dist/runtime/sourceMaps.js":
/*!*********************************************************!*\
  !*** ../../../../css-loader/dist/runtime/sourceMaps.js ***!
  \*********************************************************/
/***/ ((module) => {

"use strict";


module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./build.definitions/n4/Pages/Application/About.page":
/*!***********************************************************!*\
  !*** ./build.definitions/n4/Pages/Application/About.page ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"KeyAndValues":[{"_Name":"KeyValue0","KeyName":"User ID","Value":"#Application/#AppData/UserId","Visible":true},{"Value":"#Application/#AppData/DeviceId","_Name":"KeyValue1","KeyName":"Device ID","Visible":true},{"Value":"/n4/Globals/Application/ApplicationName.global","_Name":"KeyValue2","KeyName":"Application","Visible":true},{"Value":"/n4/Globals/Application/AppDefinition_Version.global","_Name":"KeyValue3","KeyName":"Application Metadata Version","Visible":true}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue0","Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":1}},{"KeyAndValues":[{"Value":"/n4/Rules/Application/GetClientVersion.js","_Name":"KeyValue4","KeyName":"Client Version","Visible":"$(PLT,true,true,false)"},{"Value":"/n4/Rules/Application/GetClientSupportVersions.js","_Name":"KeyValue5","KeyName":"Client Support Versions","Visible":true}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue1","Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":1}}]}],"_Type":"Page","_Name":"About","Caption":"About","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"Done","SystemItem":"Done","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/n4/Actions/CloseModalPage_Complete.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ "./build.definitions/n4/Pages/Application/Support.page":
/*!*************************************************************!*\
  !*** ./build.definitions/n4/Pages/Application/Support.page ***!
  \*************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":true,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"_Type":"Section.Type.ContactCell","_Name":"SectionContactCellTable1","EmptySection":{"FooterVisible":false},"ContactCells":[{"ContactCell":{"_Name":"ContactCellItem0","Headline":"Contact Support","ActivityItems":[{"ActivityType":"Phone","ActivityValue":"/n4/Globals/Application/SupportPhone.global"},{"ActivityType":"Email","ActivityValue":"/n4/Globals/Application/SupportEmail.global"},{"ActivityType":"Message","ActivityValue":"/n4/Globals/Application/SupportPhone.global"}]}}]},{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":false,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.SimplePropertyCollection","_Name":"SectionSimplePropertyCollection0","Visible":"$(PLT,true,true,false)","EmptySection":{"FooterVisible":false},"SimplePropertyCells":[{"SimplePropertyCell":{"_Name":"SectionSimplePropertyCell0","KeyName":"Activity Log","AccessoryType":"DisclosureIndicator","Visible":"$(PLT,true,true,false)","OnPress":"/n4/Actions/Application/NavToActivityLog.action"}}],"Layout":{"NumberOfColumns":1,"MinimumInteritemSpacing":66}}]}],"_Type":"Page","_Name":"Settings","Caption":"Settings","PrefersLargeCaption":false,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"Done","SystemItem":"Done","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/n4/Actions/CloseModalPage_Complete.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ "./build.definitions/n4/Pages/Application/UserActivityLog.page":
/*!*********************************************************************!*\
  !*** ./build.definitions/n4/Pages/Application/UserActivityLog.page ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":true,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable","Sections":[{"Controls":[{"Value":false,"_Type":"Control.Type.FormCell.Switch","_Name":"EnableLogSwitch","IsVisible":true,"Separator":true,"Caption":"Enable Logging","OnValueChange":"/n4/Rules/Logging/ToggleLogging.js","IsEditable":true},{"IsSearchEnabled":false,"_Type":"Control.Type.FormCell.ListPicker","_Name":"LogLevelListPicker","IsVisible":true,"Separator":true,"AllowMultipleSelection":false,"AllowEmptySelection":false,"Caption":"Log Level","OnValueChange":"/n4/Rules/Logging/SetUserLogLevel.js","IsSelectedSectionEnabled":false,"IsPickerDismissedOnSelection":true,"AllowDefaultValueIfOneItem":false,"IsEditable":false,"PickerItems":"/n4/Rules/Logging/LogLevels.js"},{"_Type":"Control.Type.FormCell.ListPicker","_Name":"TracingCategoriesListPicker","IsVisible":false,"Separator":true,"AllowMultipleSelection":true,"AllowEmptySelection":true,"Caption":"Tracing Categories","PickerPrompt":"Select Categories for Tracing","OnValueChange":"/n4/Rules/Logging/SetTraceCategories.js","IsSelectedSectionEnabled":true,"IsPickerDismissedOnSelection":false,"IsSearchCancelledAfterSelection":false,"AllowDefaultValueIfOneItem":false,"IsEditable":true,"PickerItems":"/n4/Rules/Logging/TraceCategories.js"},{"Value":false,"_Type":"Control.Type.FormCell.Switch","_Name":"odataTrace","IsVisible":false,"Separator":true,"Caption":"OData Tracing","OnValueChange":"/n4/Rules/Logging/SetTraceCategories.js","IsEditable":true}],"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"FormCellSection0"},{"Controls":[{"_Type":"Control.Type.FormCell.Button","_Name":"Send","IsVisible":true,"Separator":true,"Title":"Send Activity Log","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","ImagePosition":"Leading","Enabled":true,"OnPress":"/n4/Actions/Logging/UploadLogProgress.action"}],"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"FormCellSection1"}]}],"_Type":"Page","_Name":"UserActivityLog","Caption":"Activity Log","PrefersLargeCaption":false,"OnLoaded":"/n4/Rules/Logging/UserLogSetting.js"}

/***/ }),

/***/ "./build.definitions/n4/Pages/Bid_reply/Bid_reply_Create.page":
/*!********************************************************************!*\
  !*** ./build.definitions/n4/Pages/Bid_reply/Bid_reply_Create.page ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/n4/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel"},{"OnPress":"/n4/Actions/Bid_reply/Bid_reply_CreateEntity.action","Position":"Right","SystemItem":"Save"}]},"Caption":"Create Bid_reply Detail","Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"doc_id","_Name":"doc_id","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"item_name","_Name":"item_name","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"phone","_Name":"phone","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Bid_reply_Create","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/n4/Pages/Bid_reply/Bid_reply_Detail.page":
/*!********************************************************************!*\
  !*** ./build.definitions/n4/Pages/Bid_reply/Bid_reply_Detail.page ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Bid_reply Detail","DesignTimeTarget":{"Service":"/n4/Services/ajayurl.service","EntitySet":"Bid_reply","QueryOptions":""},"ActionBar":{"Items":[{"OnPress":"/n4/Actions/Bid_reply/NavToBid_reply_Edit.action","Position":"Right","SystemItem":"Edit"},{"OnPress":"/n4/Rules/Bid_reply/Bid_reply_DeleteConfirmation.js","Position":"Right","SystemItem":"Trash"}]},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{item_name}","Subhead":"{doc_id}","BodyText":"","Footnote":"","Description":"{phone}","StatusText":"","StatusImage":"","SubstatusImage":"","SubstatusText":""},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"doc_id","Value":"{doc_id}"},{"KeyName":"item_name","Value":"{item_name}"},{"KeyName":"phone","Value":"{phone}"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"}],"DataSubscriptions":[],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Bid_reply_Detail","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/n4/Pages/Bid_reply/Bid_reply_Edit.page":
/*!******************************************************************!*\
  !*** ./build.definitions/n4/Pages/Bid_reply/Bid_reply_Edit.page ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Update Bid_reply Detail","DesignTimeTarget":{"Service":"/n4/Services/ajayurl.service","EntitySet":"Bid_reply","QueryOptions":""},"ActionBar":{"Items":[{"Position":"Left","SystemItem":"Cancel","OnPress":"/n4/Actions/CloseModalPage_Cancel.action"},{"Position":"Right","SystemItem":"Save","OnPress":"/n4/Actions/Bid_reply/Bid_reply_UpdateEntity.action"}]},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"doc_id","_Name":"doc_id","Value":"{doc_id}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"item_name","_Name":"item_name","Value":"{item_name}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"phone","_Name":"phone","Value":"{phone}","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Bid_reply_Edit","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/n4/Pages/Bid_reply/Bid_reply_List.page":
/*!******************************************************************!*\
  !*** ./build.definitions/n4/Pages/Bid_reply/Bid_reply_List.page ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Bid_reply","ActionBar":{"Items":[{"OnPress":"/n4/Actions/Bid_reply/NavToBid_reply_Create.action","Position":"Right","SystemItem":"Add"}]},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{phone}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/n4/Actions/Bid_reply/NavToBid_reply_Detail.action","StatusImage":"","Title":"{item_name}","Footnote":"","PreserveIconStackSpacing":false,"StatusText":"","Subhead":"{doc_id}","SubstatusText":""},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"Bid_reply","Service":"/n4/Services/ajayurl.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Bid_reply_List","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/n4/Pages/Header_table/Header_table_Create.page":
/*!**************************************************************************!*\
  !*** ./build.definitions/n4/Pages/Header_table/Header_table_Create.page ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/n4/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel"},{"OnPress":"/n4/Actions/Header_table/Header_table_CreateEntity.action","Position":"Right","SystemItem":"Save"}]},"Caption":"Create Header_table Detail","Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"doc_id","_Name":"doc_id","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"status","_Name":"status","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"date_created","_Name":"date_created","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Header_table_Create","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/n4/Pages/Header_table/Header_table_CreateItem_table.page":
/*!************************************************************************************!*\
  !*** ./build.definitions/n4/Pages/Header_table/Header_table_CreateItem_table.page ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/n4/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel"},{"OnPress":"/n4/Actions/Header_table/Header_table_CreateItem_table.action","Position":"Right","SystemItem":"Save"}]},"Caption":"Create Item_table","Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"doc_id","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":false,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{doc_id}","ReturnValue":"{doc_id}","Target":{"EntitySet":"Header_table","Service":"/n4/Services/ajayurl.service"}},"_Name":"doc_id","_Type":"Control.Type.FormCell.ListPicker","Value":"{doc_id}"},{"Caption":"itemid","_Name":"itemid","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"item_name","_Name":"item_name","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"price","_Name":"price","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"quantity","_Name":"quantity","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Header_table_CreateItem_table","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/n4/Pages/Header_table/Header_table_CreateSupplier_bid_table.page":
/*!********************************************************************************************!*\
  !*** ./build.definitions/n4/Pages/Header_table/Header_table_CreateSupplier_bid_table.page ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/n4/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel"},{"OnPress":"/n4/Actions/Header_table/Header_table_CreateSupplier_bid_table.action","Position":"Right","SystemItem":"Save"}]},"Caption":"Create Supplier_bid_table","Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"doc_id","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":false,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{doc_id}","ReturnValue":"{doc_id}","Target":{"EntitySet":"Header_table","Service":"/n4/Services/ajayurl.service"}},"_Name":"doc_id","_Type":"Control.Type.FormCell.ListPicker","Value":"{doc_id}"},{"Caption":"invitationId","_Name":"invitationId","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"item_id","_Name":"item_id","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"item_name","_Name":"item_name","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"supp_quot_price","_Name":"supp_quot_price","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"supp_quot_quantity","_Name":"supp_quot_quantity","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"price","KeyboardType":"Number","_Name":"price","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"quantity","KeyboardType":"Number","_Name":"quantity","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"status","_Name":"status","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Header_table_CreateSupplier_bid_table","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/n4/Pages/Header_table/Header_table_CreateSupplier_table.page":
/*!****************************************************************************************!*\
  !*** ./build.definitions/n4/Pages/Header_table/Header_table_CreateSupplier_table.page ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/n4/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel"},{"OnPress":"/n4/Actions/Header_table/Header_table_CreateSupplier_table.action","Position":"Right","SystemItem":"Save"}]},"Caption":"Create Supplier_table","Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"doc_id","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":false,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{doc_id}","ReturnValue":"{doc_id}","Target":{"EntitySet":"Header_table","Service":"/n4/Services/ajayurl.service"}},"_Name":"doc_id","_Type":"Control.Type.FormCell.ListPicker","Value":"{doc_id}"},{"Caption":"invitationId","_Name":"invitationId","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"smvendor_id","_Name":"smvendor_id","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"phone_main","_Name":"phone_main","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"status","_Name":"status","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Header_table_CreateSupplier_table","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/n4/Pages/Header_table/Header_table_Detail.page":
/*!**************************************************************************!*\
  !*** ./build.definitions/n4/Pages/Header_table/Header_table_Detail.page ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Header_table Detail","DesignTimeTarget":{"Service":"/n4/Services/ajayurl.service","EntitySet":"Header_table","QueryOptions":""},"ActionBar":{"Items":[{"OnPress":"/n4/Actions/Header_table/NavToHeader_table_Edit.action","Position":"Right","SystemItem":"Edit"},{"OnPress":"/n4/Actions/Header_table/Header_table_DetailPopover.action","Position":"Right","Caption":"More"}]},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{doc_id}","Subhead":"{status}","BodyText":"","Footnote":"","Description":"{date_created}","StatusText":"","StatusImage":"","SubstatusImage":"","SubstatusText":""},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"doc_id","Value":"{doc_id}"},{"KeyName":"status","Value":"{status}"},{"KeyName":"date_created","Value":"{date_created}"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"},{"Header":{"Caption":"header_item_rel"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{itemid}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"StatusImage":"","Title":"{item_name}","Footnote":"{price}","PreserveIconStackSpacing":false,"StatusText":"{quantity}","Subhead":"{doc_id}","SubstatusText":"","OnPress":"/n4/Actions/Item_table/NavToItem_table_Detail.action"},"EmptySection":{"Caption":"No record found!"},"Target":{"EntitySet":"{@odata.readLink}/header_item_rel","Service":"/n4/Services/ajayurl.service"},"_Type":"Section.Type.ObjectTable"},{"Header":{"Caption":"header_supplier_rel"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{smvendor_id}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"StatusImage":"","Title":"{doc_id}","Footnote":"{phone_main}","PreserveIconStackSpacing":false,"StatusText":"{status}","Subhead":"{invitationId}","SubstatusText":"","OnPress":"/n4/Actions/Supplier_table/NavToSupplier_table_Detail.action"},"EmptySection":{"Caption":"No record found!"},"Target":{"EntitySet":"{@odata.readLink}/header_supplier_rel","Service":"/n4/Services/ajayurl.service"},"_Type":"Section.Type.ObjectTable"},{"Header":{"Caption":"header_supplier_bid_rel"},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{invitationId}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"StatusImage":"","Title":"{item_name}","Footnote":"{item_id}","PreserveIconStackSpacing":false,"StatusText":"{supp_quot_price}","Subhead":"{doc_id}","SubstatusText":"{supp_quot_quantity}","OnPress":"/n4/Actions/Supplier_bid_table/NavToSupplier_bid_table_Detail.action"},"EmptySection":{"Caption":"No record found!"},"Target":{"EntitySet":"{@odata.readLink}/header_supplier_bid_rel","Service":"/n4/Services/ajayurl.service"},"_Type":"Section.Type.ObjectTable"}],"DataSubscriptions":["Item_table","Supplier_table","Supplier_bid_table"],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Header_table_Detail","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/n4/Pages/Header_table/Header_table_Edit.page":
/*!************************************************************************!*\
  !*** ./build.definitions/n4/Pages/Header_table/Header_table_Edit.page ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Update Header_table Detail","DesignTimeTarget":{"Service":"/n4/Services/ajayurl.service","EntitySet":"Header_table","QueryOptions":""},"ActionBar":{"Items":[{"Position":"Left","SystemItem":"Cancel","OnPress":"/n4/Actions/CloseModalPage_Cancel.action"},{"Position":"Right","SystemItem":"Save","OnPress":"/n4/Actions/Header_table/Header_table_UpdateEntity.action"}]},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"doc_id","_Name":"doc_id","Value":"{doc_id}","_Type":"Control.Type.FormCell.SimpleProperty","IsEditable":false},{"Caption":"status","_Name":"status","Value":"{status}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"date_created","_Name":"date_created","Value":"{date_created}","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Header_table_Edit","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/n4/Pages/Header_table/Header_table_List.page":
/*!************************************************************************!*\
  !*** ./build.definitions/n4/Pages/Header_table/Header_table_List.page ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Header_table","ActionBar":{"Items":[{"OnPress":"/n4/Actions/Header_table/NavToHeader_table_Create.action","Position":"Right","SystemItem":"Add"}]},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{date_created}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/n4/Actions/Header_table/NavToHeader_table_Detail.action","StatusImage":"","Title":"{doc_id}","Footnote":"","PreserveIconStackSpacing":false,"StatusText":"","Subhead":"{status}","SubstatusText":""},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"Header_table","Service":"/n4/Services/ajayurl.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Header_table_List","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/n4/Pages/Item_table/Item_table_Create.page":
/*!**********************************************************************!*\
  !*** ./build.definitions/n4/Pages/Item_table/Item_table_Create.page ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/n4/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel"},{"OnPress":"/n4/Actions/Item_table/Item_table_CreateEntity.action","Position":"Right","SystemItem":"Save"}]},"Caption":"Create Item_table Detail","Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"doc_id","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{doc_id}","ReturnValue":"{doc_id}","Target":{"EntitySet":"Header_table","Service":"/n4/Services/ajayurl.service"}},"_Name":"doc_id","_Type":"Control.Type.FormCell.ListPicker"},{"Caption":"itemid","_Name":"itemid","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"item_name","_Name":"item_name","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"price","_Name":"price","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"quantity","_Name":"quantity","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Item_table_Create","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/n4/Pages/Item_table/Item_table_Detail.page":
/*!**********************************************************************!*\
  !*** ./build.definitions/n4/Pages/Item_table/Item_table_Detail.page ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Item_table Detail","DesignTimeTarget":{"Service":"/n4/Services/ajayurl.service","EntitySet":"Item_table","QueryOptions":""},"ActionBar":{"Items":[{"OnPress":"/n4/Actions/Item_table/NavToItem_table_Edit.action","Position":"Right","SystemItem":"Edit"},{"OnPress":"/n4/Rules/Item_table/Item_table_DeleteConfirmation.js","Position":"Right","SystemItem":"Trash"}]},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{item_name}","Subhead":"{doc_id}","BodyText":"","Footnote":"{price}","Description":"{itemid}","StatusText":"{quantity}","StatusImage":"","SubstatusImage":"","SubstatusText":""},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"doc_id","Value":"{doc_id}"},{"KeyName":"itemid","Value":"{itemid}"},{"KeyName":"item_name","Value":"{item_name}"},{"KeyName":"price","Value":"{price}"},{"KeyName":"quantity","Value":"{quantity}"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"}],"DataSubscriptions":[],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Item_table_Detail","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/n4/Pages/Item_table/Item_table_Edit.page":
/*!********************************************************************!*\
  !*** ./build.definitions/n4/Pages/Item_table/Item_table_Edit.page ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Update Item_table Detail","DesignTimeTarget":{"Service":"/n4/Services/ajayurl.service","EntitySet":"Item_table","QueryOptions":""},"ActionBar":{"Items":[{"Position":"Left","SystemItem":"Cancel","OnPress":"/n4/Actions/CloseModalPage_Cancel.action"},{"Position":"Right","SystemItem":"Save","OnPress":"/n4/Actions/Item_table/Item_table_UpdateEntity.action"}]},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"doc_id","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{doc_id}","ReturnValue":"{doc_id}","Target":{"EntitySet":"Header_table","Service":"/n4/Services/ajayurl.service"}},"Value":"{doc_id}","_Name":"doc_id","_Type":"Control.Type.FormCell.ListPicker","IsEditable":false},{"Caption":"itemid","_Name":"itemid","Value":"{itemid}","_Type":"Control.Type.FormCell.SimpleProperty","IsEditable":false},{"Caption":"item_name","_Name":"item_name","Value":"{item_name}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"price","_Name":"price","Value":"{price}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"quantity","_Name":"quantity","Value":"{quantity}","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Item_table_Edit","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/n4/Pages/Item_table/Item_table_List.page":
/*!********************************************************************!*\
  !*** ./build.definitions/n4/Pages/Item_table/Item_table_List.page ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Item_table","ActionBar":{"Items":[{"OnPress":"/n4/Actions/Item_table/NavToItem_table_Create.action","Position":"Right","SystemItem":"Add"}]},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{itemid}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/n4/Actions/Item_table/NavToItem_table_Detail.action","StatusImage":"","Title":"{item_name}","Footnote":"{price}","PreserveIconStackSpacing":false,"StatusText":"{quantity}","Subhead":"{doc_id}","SubstatusText":""},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"Item_table","Service":"/n4/Services/ajayurl.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Item_table_List","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/n4/Pages/M copy.page":
/*!************************************************!*\
  !*** ./build.definitions/n4/Pages/M copy.page ***!
  \************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Layout":{"LayoutType":"Vertical","HorizontalAlignment":"Leading"},"_Type":"Section.Type.ButtonTable","_Name":"SectionButtonTable0","Visible":true,"EmptySection":{"FooterVisible":false},"Buttons":[{"_Name":"SectionButton5","Title":"Quotes Bids","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","Image":"sap-icon://navigation-right-arrow","ImagePosition":"Trailing","FullWidth":false,"Visible":true,"Enabled":true,"OnPress":"/n4/Actions/Supplier_table/NavToSupplier_table_List.action"},{"_Name":"SectionButton3","Title":"Line Item","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","Image":"sap-icon://navigation-right-arrow","ImagePosition":"Trailing","FullWidth":false,"Visible":true,"Enabled":true,"OnPress":"/n4/Actions/Supplier_bid_table/NavToSupplier_bid_table_List.action"}]}]}],"_Type":"Page","_Name":"Main","Caption":"Main","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"User Menu","Icon":"sap-icon://customer","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/n4/Actions/Application/UserMenuPopover.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ "./build.definitions/n4/Pages/M.page":
/*!*******************************************!*\
  !*** ./build.definitions/n4/Pages/M.page ***!
  \*******************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Layout":{"LayoutType":"Vertical","HorizontalAlignment":"Leading"},"_Type":"Section.Type.ButtonTable","_Name":"SectionButtonTable0","Visible":true,"EmptySection":{"FooterVisible":false},"Buttons":[{"_Name":"SectionButton5","Title":"Quotes Bids","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","Image":"sap-icon://navigation-right-arrow","ImagePosition":"Trailing","FullWidth":false,"Visible":true,"Enabled":true,"OnPress":"/n4/Actions/Supplier_table/NavToSupplier_table_List.action"}]}]}],"_Type":"Page","_Name":"Main","Caption":"Main","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"User Menu","Icon":"sap-icon://customer","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/n4/Actions/Application/UserMenuPopover.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ "./build.definitions/n4/Pages/Main.page":
/*!**********************************************!*\
  !*** ./build.definitions/n4/Pages/Main.page ***!
  \**********************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":true,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","Target":{"Service":"/n4/Services/ajayurl.service","EntitySet":"Supplier_table"},"_Name":"SectionedTable0","Sections":[{"EmptySection":{"FooterVisible":false},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":false,"HeaderSeparator":false,"FooterSeparator":false,"ControlSeparator":false},"Styles":{"ImageBackgroundColor":"t","BackgroundColor":"","Image":""},"color":"black","_Type":"Section.Type.Image","_Name":"SectionImage1","Visible":true,"Image":"/n4/Images/peol_logo (1).png","Width":190,"Height":190,"Alignment":"Center","ContentMode":"ScaleToFill","PaddingTop":60,"PaddingBottom":140,"PaddingLeft":40,"PaddingRight":40},{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":false,"HeaderSeparator":false,"FooterSeparator":false,"ControlSeparator":false},"Controls":[],"Header":{"Styles":{"Header":"Formm","Caption":"Formm"},"_Name":"SectionHeader0","AccessoryType":"None","UseTopPadding":false,"Caption":"                                PEOL TECHNOLOGIES"},"Visible":true,"EmptySection":{"Caption":"Formm","FooterVisible":true,"Style":"Formm"},"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0"},{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":false,"HeaderSeparator":false,"FooterSeparator":false,"ControlSeparator":false},"Controls":[],"Header":{"Styles":{"Caption":"e"},"_Name":"SectionHeader1","AccessoryType":"None","UseTopPadding":false,"Caption":"                            Expeditios Business Solutions                            "},"Footer":{"Alignment":"Center","Styles":{"Footer":"f","Caption":"f","AttributeLabel":"f"},"_Name":"SectionFooter0","Caption":"                                  Get Started","FooterStyle":"Attribute","Visible":true,"OnPress":"/n4/Actions/lodg_to_login.action","UseBottomPadding":false},"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"SectionFormCell1"}],"LoadingIndicator":{"Enabled":true,"Text":"coming soon"}}],"PullDown":{"Styles":{"BackgroundColor":"#21d61d","IndicatorColor":"#eaa4a4"}},"DesignTimeTarget":{"Service":"/n4/Services/ajayurl.service","EntitySet":"Supplier_table"},"_Type":"Page","_Name":"Page0","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/n4/Pages/Registration.page":
/*!******************************************************!*\
  !*** ./build.definitions/n4/Pages/Registration.page ***!
  \******************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":false,"HeaderSeparator":false,"FooterSeparator":false,"ControlSeparator":false},"Controls":[{"validationProperties":{"ValidationMessageColor":"#e22222","SeparatorBackgroundColor":"#787a4b","SeparatorIsHidden":true,"ValidationViewBackgroundColor":"#9b5e5e","ValidationViewIsHidden":true},"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FormCellSimpleProperty0","IsVisible":true,"Separator":true,"Caption":"Name","PlaceHolder":"Enter your name","KeyboardType":"Default","AlternateInput":"None","Enabled":true,"IsEditable":true},{"validationProperties":{"ValidationMessage":"It should contain @gmail.com","ValidationMessageColor":"#dd1313","SeparatorBackgroundColor":"#b22323"},"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FormCellSimpleProperty2","IsVisible":true,"Separator":true,"Caption":"Email","PlaceHolder":"Enter your email","KeyboardType":"Email","Enabled":true,"IsEditable":true},{"validationProperties":{"ValidationMessage":"input should be 10 digit","ValidationMessageColor":"#c93636","SeparatorBackgroundColor":"#ad5353","SeparatorIsHidden":false,"ValidationViewBackgroundColor":"#a36363"},"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FormCellSimpleProperty3","IsVisible":true,"Separator":true,"Caption":"Phone","PlaceHolder":"Enter your phone number","KeyboardType":"Phone","AlternateInput":"None","Enabled":true,"IsEditable":true},{"validationProperties":{"ValidationMessage":"{Message}","ValidationMessageColor":"#b22a2a"},"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FormCellSimpleProperty4","IsVisible":true,"Separator":false,"Caption":"Password","PlaceHolder":"Enter password","KeyboardType":"Password","HelperText":"***8 character/special character/number***","Enabled":true,"IsEditable":true}],"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0"},{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":false,"HeaderSeparator":false,"FooterSeparator":false,"ControlSeparator":false},"Layout":{"LayoutType":"Vertical","HorizontalAlignment":"Leading"},"_Type":"Section.Type.ButtonTable","_Name":"SectionButtonTable0","Visible":true,"EmptySection":{"FooterVisible":false},"Buttons":[{"Styles":{"Button":"rbutton1"},"_Name":"SectionButton0","Title":"Sign In","Alignment":"Center","ButtonType":"Primary","Semantic":"Tint","ImagePosition":"Trailing","ImageSize":{"Height":20},"FullWidth":false,"Visible":true,"Enabled":true,"OnPress":{"Handler":"/n4/Actions/Service/SyncStartedMessage.action","UserInteraction":{"Enabled":true,"Title":"Register"}}}]}]}],"_Type":"Page","_Name":"Registration","Caption":"Sign In","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"User Menu","Icon":"sap-icon://customer","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/n4/Actions/Application/UserMenuPopover.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ "./build.definitions/n4/Pages/Supplier_bid_table/Supplier_bid_table_Create.page":
/*!**************************************************************************************!*\
  !*** ./build.definitions/n4/Pages/Supplier_bid_table/Supplier_bid_table_Create.page ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/n4/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel"},{"OnPress":"/n4/Actions/Supplier_bid_table/Supplier_bid_table_CreateEntity.action","Position":"Right","SystemItem":"Save"}]},"Caption":"Create Supplier_bid_table Detail","Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"doc_id","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{doc_id}","ReturnValue":"{doc_id}","Target":{"EntitySet":"Header_table","Service":"/n4/Services/ajayurl.service"}},"_Name":"doc_id","_Type":"Control.Type.FormCell.ListPicker"},{"Caption":"invitationId","_Name":"invitationId","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"item_id","_Name":"item_id","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"item_name","_Name":"item_name","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"supp_quot_price","_Name":"supp_quot_price","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"supp_quot_quantity","_Name":"supp_quot_quantity","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"price","KeyboardType":"Number","_Name":"price","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"quantity","KeyboardType":"Number","_Name":"quantity","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"status","_Name":"status","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Supplier_bid_table_Create","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/n4/Pages/Supplier_bid_table/Supplier_bid_table_Detail.page":
/*!**************************************************************************************!*\
  !*** ./build.definitions/n4/Pages/Supplier_bid_table/Supplier_bid_table_Detail.page ***!
  \**************************************************************************************/
/***/ ((module) => {

module.exports = {"DesignTimeTarget":{"Service":"/n4/Services/ajayurl.service","EntitySet":"Supplier_bid_table","QueryOptions":""},"Controls":[{"DataSubscriptions":[],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable","Sections":[{"ObjectHeader":{"Subhead":"{doc_id}","Footnote":"{item_id}","Description":"{invitationId}","StatusText":"{supp_quot_price}","SubstatusText":"{supp_quot_quantity}","HeadlineText":"{item_name}","StatusPosition":"Stacked","StatusImagePosition":"Leading","SubstatusImagePosition":"Leading"},"_Type":"Section.Type.ObjectHeader","_Name":"SectionObjectHeader0","Visible":true},{"KeyAndValues":[{"Value":"{doc_id}","_Name":"KeyValue0","KeyName":"doc_id","Visible":true},{"Value":"{invitationId}","_Name":"KeyValue1","KeyName":"invitationId","Visible":true},{"Value":"{item_id}","_Name":"KeyValue2","KeyName":"item_id","Visible":true},{"Value":"{item_name}","_Name":"KeyValue3","KeyName":"item_name","Visible":true},{"Value":"{supp_quot_price}","_Name":"KeyValue4","KeyName":"supp_quot_price","Visible":true},{"Value":"{supp_quot_quantity}","_Name":"KeyValue5","KeyName":"supp_quot_quantity","Visible":true},{"Value":"{price}","_Name":"KeyValue6","KeyName":"price","Visible":true},{"Value":"{quantity}","_Name":"KeyValue7","KeyName":"quantity","Visible":true},{"Value":"{status}","_Name":"KeyValue8","KeyName":"status","Visible":true}],"MaxItemCount":1,"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue0","Visible":true,"EmptySection":{"FooterVisible":false},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Layout":{"NumberOfColumns":2}}],"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"}}],"_Type":"Page","_Name":"Supplier_bid_table_Detail","Caption":"Line Item Detail","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"","SystemItem":"Edit","Position":"Right","IsIconCircular":false,"OnPress":"/n4/Actions/Supplier_bid_table/NavToSupplier_bid_table_Edit.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ "./build.definitions/n4/Pages/Supplier_bid_table/Supplier_bid_table_Edit.page":
/*!************************************************************************************!*\
  !*** ./build.definitions/n4/Pages/Supplier_bid_table/Supplier_bid_table_Edit.page ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = {"DesignTimeTarget":{"Service":"/n4/Services/ajayurl.service","EntitySet":"Supplier_bid_table","QueryOptions":""},"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"Controls":[{"Value":"{doc_id}","_Type":"Control.Type.FormCell.ListPicker","_Name":"doc_id","IsVisible":true,"Separator":true,"AllowMultipleSelection":false,"AllowEmptySelection":true,"Caption":"Doc Id","IsSelectedSectionEnabled":true,"IsPickerDismissedOnSelection":true,"AllowDefaultValueIfOneItem":false,"IsEditable":false,"PickerItems":{"DisplayValue":"{doc_id}","ReturnValue":"{doc_id}","Target":{"EntitySet":"Header_table","Service":"/n4/Services/ajayurl.service"}}},{"Value":"{invitationId}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"invitationId","IsVisible":true,"Separator":true,"Caption":"Invitation Id","Enabled":false,"IsEditable":false},{"Value":"{item_id}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"item_id","IsVisible":true,"Separator":true,"Caption":"Item Id","Enabled":false,"IsEditable":false},{"Value":"{item_name}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"item_name","IsVisible":true,"Separator":true,"Caption":"Item Name","Enabled":false,"IsEditable":true},{"Value":"{supp_quot_price}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"supp_quot_price","IsVisible":true,"Separator":true,"Caption":"Base Price","Enabled":true,"IsEditable":false},{"Value":"{supp_quot_quantity}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"supp_quot_quantity","IsVisible":true,"Separator":true,"Caption":"Min Quantity","Enabled":true,"IsEditable":false},{"Value":"{price}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"price","IsVisible":true,"Separator":true,"Caption":"price*","KeyboardType":"Number","Enabled":true,"IsEditable":true},{"Value":"{quantity}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"quantity","IsVisible":true,"Separator":true,"Caption":"quantity*","KeyboardType":"Number","Enabled":true,"IsEditable":true},{"Value":"{status}","_Type":"Control.Type.FormCell.SimpleProperty","_Name":"status","IsVisible":true,"Separator":true,"Caption":"status","Enabled":true,"IsEditable":false}],"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0"}]}],"_Type":"Page","_Name":"Supplier_bid_table_Edit","Caption":"Update ","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"","SystemItem":"Cancel","Position":"Left","IsIconCircular":false,"OnPress":"/n4/Actions/CloseModalPage_Cancel.action"},{"_Name":"ActionBarItem1","Caption":"","SystemItem":"Save","Position":"Right","IsIconCircular":false,"OnPress":"/n4/Actions/Supplier_bid_table/Supplier_bid_table_UpdateEntity.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ "./build.definitions/n4/Pages/Supplier_bid_table/Supplier_bid_table_List.page":
/*!************************************************************************************!*\
  !*** ./build.definitions/n4/Pages/Supplier_bid_table/Supplier_bid_table_List.page ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Supplier_bid_table","ActionBar":{"Items":[{"OnPress":"/n4/Actions/Supplier_bid_table/NavToSupplier_bid_table_Create.action","Position":"Right","SystemItem":"Add"}]},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{invitationId}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/n4/Actions/Supplier_bid_table/NavToSupplier_bid_table_Detail.action","StatusImage":"","Title":"{item_name}","Footnote":"{item_id}","PreserveIconStackSpacing":false,"StatusText":"{supp_quot_price}","Subhead":"{doc_id}","SubstatusText":"{supp_quot_quantity}"},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"Supplier_bid_table","Service":"/n4/Services/ajayurl.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Supplier_bid_table_List","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/n4/Pages/Supplier_table/Supplier_table_Create.page":
/*!******************************************************************************!*\
  !*** ./build.definitions/n4/Pages/Supplier_table/Supplier_table_Create.page ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/n4/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel"},{"OnPress":"/n4/Actions/Supplier_table/Supplier_table_CreateEntity.action","Position":"Right","SystemItem":"Save"}]},"Caption":"Create Supplier_table Detail","Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"doc_id","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{doc_id}","ReturnValue":"{doc_id}","Target":{"EntitySet":"Header_table","Service":"/n4/Services/ajayurl.service"}},"_Name":"doc_id","_Type":"Control.Type.FormCell.ListPicker"},{"Caption":"invitationId","_Name":"invitationId","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"smvendor_id","_Name":"smvendor_id","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"phone_main","_Name":"phone_main","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"status","_Name":"status","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Supplier_table_Create","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/n4/Pages/Supplier_table/Supplier_table_CreateSupplier_bid_table.page":
/*!************************************************************************************************!*\
  !*** ./build.definitions/n4/Pages/Supplier_table/Supplier_table_CreateSupplier_bid_table.page ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/n4/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel"},{"OnPress":"/n4/Actions/Supplier_table/Supplier_table_CreateSupplier_bid_table.action","Position":"Right","SystemItem":"Save"}]},"Caption":"Create Supplier_bid_table","Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"doc_id","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsEditable":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{doc_id}","ReturnValue":"{doc_id}","Target":{"EntitySet":"Header_table","Service":"/n4/Services/ajayurl.service"}},"_Name":"doc_id","_Type":"Control.Type.FormCell.ListPicker"},{"Caption":"invitationId","_Name":"invitationId","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"item_id","_Name":"item_id","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"item_name","_Name":"item_name","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"supp_quot_price","_Name":"supp_quot_price","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"supp_quot_quantity","_Name":"supp_quot_quantity","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"price","KeyboardType":"Number","_Name":"price","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"quantity","KeyboardType":"Number","_Name":"quantity","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"status","_Name":"status","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Supplier_table_CreateSupplier_bid_table","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/n4/Pages/Supplier_table/Supplier_table_Detail copy.page":
/*!***********************************************************************************!*\
  !*** ./build.definitions/n4/Pages/Supplier_table/Supplier_table_Detail copy.page ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = {"DesignTimeTarget":{"Service":"/n4/Services/ajayurl.service","EntitySet":"Supplier_table","QueryOptions":""},"Controls":[{"DataSubscriptions":["Supplier_bid_table"],"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable","Sections":[{"ObjectHeader":{"Subhead":"{invitationId}","Footnote":"{phone_main}","Description":"{smvendor_id}","HeadlineText":"{doc_id}","StatusPosition":"Stacked","StatusImagePosition":"Leading","SubstatusImagePosition":"Leading"},"_Type":"Section.Type.ObjectHeader","_Name":"SectionObjectHeader0","Visible":true},{"KeyAndValues":[{"Value":"{doc_id}","_Name":"KeyValue0","KeyName":"doc_id","Visible":true},{"Value":"{invitationId}","_Name":"KeyValue1","KeyName":"invitationId","Visible":true},{"Value":"{smvendor_id}","_Name":"KeyValue2","KeyName":"smvendor_id","Visible":true},{"Value":"{phone_main}","_Name":"KeyValue3","KeyName":"phone_main","Visible":true},{"Value":"{status}","_Name":"KeyValue4","KeyName":"status","Visible":true}],"MaxItemCount":1,"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue0","Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":2}},{"Header":{"_Name":"SectionHeader0","AccessoryType":"None","UseTopPadding":true,"Caption":"Quotes Bids Line Item"},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.ObjectTable","Target":{"EntitySet":"{@odata.readLink}/supplier_to_sbid","Service":"/n4/Services/ajayurl.service"},"_Name":"SectionObjectTable0","Visible":true,"EmptySection":{"Caption":"No record found!","FooterVisible":false},"ObjectCell":{"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true,"LeadingItems":[],"TrailingItems":[]},"Title":"{item_name}","Subhead":"{doc_id}","Footnote":"{item_id}","Description":"{invitationId}","StatusText":"{supp_quot_price}","SubstatusText":"{supp_quot_quantity}","PreserveIconStackSpacing":false,"AccessoryType":"DisclosureIndicator","Tags":[],"AvatarStack":{"ImageIsCircular":true,"ImageHasBorder":false},"AvatarGrid":{"ImageIsCircular":true},"OnPress":"/n4/Actions/Supplier_bid_table/NavToSupplier_bid_table_Detail.action","Selected":false},"HighlightSelectedItem":false}]}],"_Type":"Page","_Name":"Supplier_table_Detail","Caption":"Supplier_table Detail","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"","SystemItem":"Edit","Position":"Right","IsIconCircular":false,"OnPress":"/n4/Actions/Supplier_table/NavToSupplier_table_Edit.action"},{"_Name":"ActionBarItem1","Caption":"More","Position":"Right","IsIconCircular":false,"OnPress":"/n4/Actions/Supplier_table/Supplier_table_DetailPopover.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ "./build.definitions/n4/Pages/Supplier_table/Supplier_table_Detail.page":
/*!******************************************************************************!*\
  !*** ./build.definitions/n4/Pages/Supplier_table/Supplier_table_Detail.page ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"DesignTimeTarget":{"Service":"/n4/Services/ajayurl.service","EntitySet":"Supplier_table","QueryOptions":""},"Controls":[{"DataSubscriptions":["Supplier_bid_table"],"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable","Sections":[{"ObjectHeader":{"Description":"{smvendor_id}","HeadlineText":"{invitationId}","StatusPosition":"Stacked","StatusImagePosition":"Leading","SubstatusImagePosition":"Leading"},"_Type":"Section.Type.ObjectHeader","_Name":"SectionObjectHeader0","Visible":true},{"KeyAndValues":[{"Value":"{doc_id}","_Name":"KeyValue0","KeyName":"doc_id","Visible":true},{"Value":"{invitationId}","_Name":"KeyValue1","KeyName":"invitationId","Visible":true},{"Value":"{smvendor_id}","_Name":"KeyValue2","KeyName":"smvendor_id","Visible":true},{"Value":"{phone_main}","_Name":"KeyValue3","KeyName":"phone_main","Visible":true},{"Value":"{status}","_Name":"KeyValue4","KeyName":"status","Visible":true}],"MaxItemCount":1,"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.KeyValue","_Name":"SectionKeyValue0","Visible":true,"EmptySection":{"FooterVisible":false},"Layout":{"NumberOfColumns":2}},{"Header":{"_Name":"SectionHeader0","AccessoryType":"None","UseTopPadding":true,"Caption":"Quotes Bids Line Item"},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.ObjectTable","Target":{"EntitySet":"{@odata.readLink}/supplier_to_sbid","Service":"/n4/Services/ajayurl.service"},"_Name":"SectionObjectTable0","Visible":true,"EmptySection":{"Caption":"No record found!","FooterVisible":false},"ObjectCell":{"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true,"LeadingItems":[],"TrailingItems":[]},"Title":"{item_name}","Subhead":"{doc_id}","Footnote":"{item_id}","Description":"{invitationId}","StatusText":"{supp_quot_price}","SubstatusText":"{supp_quot_quantity}","PreserveIconStackSpacing":false,"AccessoryType":"DisclosureIndicator","AccessoryButtonIcon":"sap-icon://navigation-right-arrow","Tags":[],"AvatarStack":{"ImageIsCircular":true,"ImageHasBorder":false},"AvatarGrid":{"ImageIsCircular":true},"OnPress":"/n4/Actions/Supplier_bid_table/NavToSupplier_bid_table_Detail.action","Selected":false},"HighlightSelectedItem":false}]}],"_Type":"Page","_Name":"Supplier_table_Detail","Caption":"Quotes Bids Detail","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/n4/Pages/Supplier_table/Supplier_table_Edit.page":
/*!****************************************************************************!*\
  !*** ./build.definitions/n4/Pages/Supplier_table/Supplier_table_Edit.page ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Update Supplier_table Detail","DesignTimeTarget":{"Service":"/n4/Services/ajayurl.service","EntitySet":"Supplier_table","QueryOptions":""},"ActionBar":{"Items":[{"Position":"Left","SystemItem":"Cancel","OnPress":"/n4/Actions/CloseModalPage_Cancel.action"},{"Position":"Right","SystemItem":"Save","OnPress":"/n4/Actions/Supplier_table/Supplier_table_UpdateEntity.action"}]},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"doc_id","AllowMultipleSelection":false,"AllowEmptySelection":true,"IsPickerDismissedOnSelection":true,"IsSelectedSectionEnabled":true,"PickerItems":{"DisplayValue":"{doc_id}","ReturnValue":"{doc_id}","Target":{"EntitySet":"Header_table","Service":"/n4/Services/ajayurl.service"}},"Value":"{doc_id}","_Name":"doc_id","_Type":"Control.Type.FormCell.ListPicker","IsEditable":false},{"Caption":"invitationId","_Name":"invitationId","Value":"{invitationId}","_Type":"Control.Type.FormCell.SimpleProperty","IsEditable":false},{"Caption":"smvendor_id","_Name":"smvendor_id","Value":"{smvendor_id}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"phone_main","_Name":"phone_main","Value":"{phone_main}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"status","_Name":"status","Value":"{status}","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Supplier_table_Edit","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/n4/Pages/Supplier_table/Supplier_table_List.page":
/*!****************************************************************************!*\
  !*** ./build.definitions/n4/Pages/Supplier_table/Supplier_table_List.page ***!
  \****************************************************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable","Sections":[{"Header":{"_Name":"SectionHeader0","AccessoryType":"None","UseTopPadding":false},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":true,"HeaderSeparator":true,"FooterSeparator":true,"ControlSeparator":true},"_Type":"Section.Type.ObjectTable","Target":{"EntitySet":"Supplier_table","Service":"/n4/Services/ajayurl.service","QueryOptions":""},"_Name":"SectionObjectTable0","Visible":true,"EmptySection":{"Caption":"No record found!","FooterVisible":false},"ObjectCell":{"ContextMenu":{"Items":[],"PerformFirstActionWithFullSwipe":true,"LeadingItems":[],"TrailingItems":[]},"Title":"{doc_id}","Subhead":"{invitationId}","Description":"{smvendor_id}","PreserveIconStackSpacing":false,"AccessoryType":"DisclosureIndicator","AccessoryButtonIcon":"sap-icon://navigation-right-arrow","Tags":[],"AvatarStack":{"ImageIsCircular":true,"ImageHasBorder":false},"AvatarGrid":{"ImageIsCircular":true},"OnPress":"/n4/Actions/Supplier_table/NavToSupplier_table_Detail.action","Selected":false},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"HighlightSelectedItem":false}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."}}],"_Type":"Page","_Name":"Supplier_table_List","Caption":"Quotes Bids","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/n4/Pages/Timestamp/Timestamp_Create.page":
/*!********************************************************************!*\
  !*** ./build.definitions/n4/Pages/Timestamp/Timestamp_Create.page ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/n4/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel"},{"OnPress":"/n4/Actions/Timestamp/Timestamp_CreateEntity.action","Position":"Right","SystemItem":"Save"}]},"Caption":"Create Timestamp Detail","Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"timestamp","_Name":"timestamp","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Timestamp_Create","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/n4/Pages/Timestamp/Timestamp_Detail.page":
/*!********************************************************************!*\
  !*** ./build.definitions/n4/Pages/Timestamp/Timestamp_Detail.page ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Timestamp Detail","DesignTimeTarget":{"Service":"/n4/Services/ajayurl.service","EntitySet":"Timestamp","QueryOptions":""},"ActionBar":{"Items":[{"OnPress":"/n4/Actions/Timestamp/NavToTimestamp_Edit.action","Position":"Right","SystemItem":"Edit"},{"OnPress":"/n4/Rules/Timestamp/Timestamp_DeleteConfirmation.js","Position":"Right","SystemItem":"Trash"}]},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{timestamp}","Subhead":"","BodyText":"","Footnote":"","Description":"","StatusText":"","StatusImage":"","SubstatusImage":"","SubstatusText":""},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"timestamp","Value":"{timestamp}"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"}],"DataSubscriptions":[],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Timestamp_Detail","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/n4/Pages/Timestamp/Timestamp_Edit.page":
/*!******************************************************************!*\
  !*** ./build.definitions/n4/Pages/Timestamp/Timestamp_Edit.page ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Update Timestamp Detail","DesignTimeTarget":{"Service":"/n4/Services/ajayurl.service","EntitySet":"Timestamp","QueryOptions":""},"ActionBar":{"Items":[{"Position":"Left","SystemItem":"Cancel","OnPress":"/n4/Actions/CloseModalPage_Cancel.action"},{"Position":"Right","SystemItem":"Save","OnPress":"/n4/Actions/Timestamp/Timestamp_UpdateEntity.action"}]},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"timestamp","_Name":"timestamp","Value":"{timestamp}","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"Timestamp_Edit","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/n4/Pages/Timestamp/Timestamp_List.page":
/*!******************************************************************!*\
  !*** ./build.definitions/n4/Pages/Timestamp/Timestamp_List.page ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Timestamp","ActionBar":{"Items":[{"OnPress":"/n4/Actions/Timestamp/NavToTimestamp_Create.action","Position":"Right","SystemItem":"Add"}]},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/n4/Actions/Timestamp/NavToTimestamp_Detail.action","StatusImage":"","Title":"{timestamp}","Footnote":"","PreserveIconStackSpacing":false,"StatusText":"","Subhead":"","SubstatusText":""},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"Timestamp","Service":"/n4/Services/ajayurl.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"Timestamp_List","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/n4/Pages/demo.page":
/*!**********************************************!*\
  !*** ./build.definitions/n4/Pages/demo.page ***!
  \**********************************************/
/***/ ((module) => {

module.exports = {"Controls":[{"FilterFeedbackBar":{"ShowAllFilters":false,"_Type":"Control.Type.FilterFeedbackBar"},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable0","Sections":[{"EmptySection":{"FooterVisible":false},"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":false,"HeaderSeparator":false,"FooterSeparator":false,"ControlSeparator":true},"_Type":"Section.Type.Image","_Name":"SectionImage0","Visible":true,"Image":"/n4/Images/peol_logo (1).png","Width":190,"Height":180,"Alignment":"Center","ContentMode":"ScaleAspectFit"},{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":false,"HeaderSeparator":false,"FooterSeparator":false,"ControlSeparator":false},"Controls":[{"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FormCellSimpleProperty0","IsVisible":true,"Separator":false,"Caption":"Email","PlaceHolder":"Enter the Email","KeyboardType":"Email","AlternateInput":"None","Enabled":true,"IsEditable":true},{"validationProperties":{"SeparatorIsHidden":true},"_Type":"Control.Type.FormCell.SimpleProperty","_Name":"FormCellSimpleProperty1","IsVisible":true,"Separator":false,"Caption":"Password","PlaceHolder":"Enter The Password","KeyboardType":"Password","Enabled":true,"IsEditable":true},{"_Type":"Control.Type.FormCell.Button","_Name":"FormCellButton0","IsVisible":true,"Separator":false,"Styles":{"Button":"button1"},"Title":"Login","Alignment":"Center","ButtonType":"Text","Semantic":"Normal","ImagePosition":"Leading","Enabled":true,"OnPress":"/n4/Actions/login_to_dshbd.action"}],"Visible":true,"EmptySection":{"FooterVisible":false},"_Type":"Section.Type.FormCell","_Name":"SectionFormCell1"},{"Separators":{"TopSectionSeparator":false,"BottomSectionSeparator":false,"HeaderSeparator":false,"FooterSeparator":false,"ControlSeparator":false},"Layout":{"LayoutType":"Vertical","HorizontalAlignment":"Leading"},"_Type":"Section.Type.ButtonTable","_Name":"SectionButtonTable0","Visible":true,"EmptySection":{"FooterVisible":false},"Buttons":[{"_Name":"SectionButton0","Title":"Sign In","Alignment":"Center","ButtonType":"Text","Semantic":"Tint","ImagePosition":"Leading","FullWidth":false,"Visible":true,"Enabled":true,"OnPress":"/n4/Actions/login_to_reg.action"}]}],"LoadingIndicator":{"Enabled":true,"Text":""}}],"_Type":"Page","_Name":"Page0","PrefersLargeCaption":true,"ActionBar":{"Items":[{"_Name":"ActionBarItem0","Caption":"User Menu","Icon":"sap-icon://customer","Position":"Right","IsIconCircular":false,"Visible":true,"OnPress":"/n4/Actions/Application/UserMenuPopover.action"}],"_Name":"ActionBar1"}}

/***/ }),

/***/ "./build.definitions/n4/Pages/supplier_replay/supplier_replay_Create.page":
/*!********************************************************************************!*\
  !*** ./build.definitions/n4/Pages/supplier_replay/supplier_replay_Create.page ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = {"ActionBar":{"Items":[{"OnPress":"/n4/Actions/CloseModalPage_Cancel.action","Position":"Left","SystemItem":"Cancel"},{"OnPress":"/n4/Actions/supplier_replay/supplier_replay_CreateEntity.action","Position":"Right","SystemItem":"Save"}]},"Caption":"Create supplier_replay Detail","Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"OriginalRepliedMessageSender","_Name":"OriginalRepliedMessageSender","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"SmsMessageSid","_Name":"SmsMessageSid","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"NumMedia","_Name":"NumMedia","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"ProfileName","_Name":"ProfileName","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"SmsSid","_Name":"SmsSid","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"WaId","_Name":"WaId","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"SmsStatus","_Name":"SmsStatus","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Body","_Name":"Body","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"ButtonText","_Name":"ButtonText","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"To","_Name":"To","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"ButtonPayload","_Name":"ButtonPayload","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"NumSegments","_Name":"NumSegments","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"ReferralNumMedia","_Name":"ReferralNumMedia","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"MessageSid","_Name":"MessageSid","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"AccountSid","_Name":"AccountSid","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"OriginalRepliedMessageSid","_Name":"OriginalRepliedMessageSid","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"From","_Name":"From","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"ApiVersion","_Name":"ApiVersion","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"supplier_replay_Create","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/n4/Pages/supplier_replay/supplier_replay_Detail.page":
/*!********************************************************************************!*\
  !*** ./build.definitions/n4/Pages/supplier_replay/supplier_replay_Detail.page ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"supplier_replay Detail","DesignTimeTarget":{"Service":"/n4/Services/ajayurl.service","EntitySet":"supplier_replay","QueryOptions":""},"ActionBar":{"Items":[{"OnPress":"/n4/Actions/supplier_replay/NavTosupplier_replay_Edit.action","Position":"Right","SystemItem":"Edit"},{"OnPress":"/n4/Rules/supplier_replay/supplier_replay_DeleteConfirmation.js","Position":"Right","SystemItem":"Trash"}]},"Controls":[{"Sections":[{"ObjectHeader":{"Tags":[],"DetailImage":"","HeadlineText":"{ProfileName}","Subhead":"{OriginalRepliedMessageSender}","BodyText":"","Footnote":"{NumMedia}","Description":"{SmsMessageSid}","StatusText":"{SmsSid}","StatusImage":"","SubstatusImage":"","SubstatusText":"{WaId}"},"_Type":"Section.Type.ObjectHeader"},{"KeyAndValues":[{"KeyName":"OriginalRepliedMessageSender","Value":"{OriginalRepliedMessageSender}"},{"KeyName":"SmsMessageSid","Value":"{SmsMessageSid}"},{"KeyName":"NumMedia","Value":"{NumMedia}"},{"KeyName":"ProfileName","Value":"{ProfileName}"},{"KeyName":"SmsSid","Value":"{SmsSid}"},{"KeyName":"WaId","Value":"{WaId}"},{"KeyName":"SmsStatus","Value":"{SmsStatus}"},{"KeyName":"Body","Value":"{Body}"},{"KeyName":"ButtonText","Value":"{ButtonText}"},{"KeyName":"To","Value":"{To}"},{"KeyName":"ButtonPayload","Value":"{ButtonPayload}"},{"KeyName":"NumSegments","Value":"{NumSegments}"},{"KeyName":"ReferralNumMedia","Value":"{ReferralNumMedia}"},{"KeyName":"MessageSid","Value":"{MessageSid}"},{"KeyName":"AccountSid","Value":"{AccountSid}"},{"KeyName":"OriginalRepliedMessageSid","Value":"{OriginalRepliedMessageSid}"},{"KeyName":"From","Value":"{From}"},{"KeyName":"ApiVersion","Value":"{ApiVersion}"}],"Layout":{"NumberOfColumns":2},"MaxItemCount":1,"_Name":"SectionKeyValue0","_Type":"Section.Type.KeyValue"}],"DataSubscriptions":[],"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"supplier_replay_Detail","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/n4/Pages/supplier_replay/supplier_replay_Edit.page":
/*!******************************************************************************!*\
  !*** ./build.definitions/n4/Pages/supplier_replay/supplier_replay_Edit.page ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"Update supplier_replay Detail","DesignTimeTarget":{"Service":"/n4/Services/ajayurl.service","EntitySet":"supplier_replay","QueryOptions":""},"ActionBar":{"Items":[{"Position":"Left","SystemItem":"Cancel","OnPress":"/n4/Actions/CloseModalPage_Cancel.action"},{"Position":"Right","SystemItem":"Save","OnPress":"/n4/Actions/supplier_replay/supplier_replay_UpdateEntity.action"}]},"Controls":[{"Sections":[{"_Type":"Section.Type.FormCell","_Name":"SectionFormCell0","Visible":true,"Controls":[{"Caption":"OriginalRepliedMessageSender","_Name":"OriginalRepliedMessageSender","Value":"{OriginalRepliedMessageSender}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"SmsMessageSid","_Name":"SmsMessageSid","Value":"{SmsMessageSid}","_Type":"Control.Type.FormCell.SimpleProperty","IsEditable":false},{"Caption":"NumMedia","_Name":"NumMedia","Value":"{NumMedia}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"ProfileName","_Name":"ProfileName","Value":"{ProfileName}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"SmsSid","_Name":"SmsSid","Value":"{SmsSid}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"WaId","_Name":"WaId","Value":"{WaId}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"SmsStatus","_Name":"SmsStatus","Value":"{SmsStatus}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"Body","_Name":"Body","Value":"{Body}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"ButtonText","_Name":"ButtonText","Value":"{ButtonText}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"To","_Name":"To","Value":"{To}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"ButtonPayload","_Name":"ButtonPayload","Value":"{ButtonPayload}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"NumSegments","_Name":"NumSegments","Value":"{NumSegments}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"ReferralNumMedia","_Name":"ReferralNumMedia","Value":"{ReferralNumMedia}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"MessageSid","_Name":"MessageSid","Value":"{MessageSid}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"AccountSid","_Name":"AccountSid","Value":"{AccountSid}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"OriginalRepliedMessageSid","_Name":"OriginalRepliedMessageSid","Value":"{OriginalRepliedMessageSid}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"From","_Name":"From","Value":"{From}","_Type":"Control.Type.FormCell.SimpleProperty"},{"Caption":"ApiVersion","_Name":"ApiVersion","Value":"{ApiVersion}","_Type":"Control.Type.FormCell.SimpleProperty"}]}],"_Name":"SectionedTable0","_Type":"Control.Type.SectionedTable"}],"_Type":"Page","_Name":"supplier_replay_Edit","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/n4/Pages/supplier_replay/supplier_replay_List.page":
/*!******************************************************************************!*\
  !*** ./build.definitions/n4/Pages/supplier_replay/supplier_replay_List.page ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"Caption":"supplier_replay","ActionBar":{"Items":[{"OnPress":"/n4/Actions/supplier_replay/NavTosupplier_replay_Create.action","Position":"Right","SystemItem":"Add"}]},"Controls":[{"Sections":[{"Header":{"UseTopPadding":false},"ObjectCell":{"AccessoryType":"DisclosureIndicator","Description":"{SmsMessageSid}","AvatarStack":{"Avatars":[{"Image":""}],"ImageIsCircular":false},"Icons":[],"OnPress":"/n4/Actions/supplier_replay/NavTosupplier_replay_Detail.action","StatusImage":"","Title":"{ProfileName}","Footnote":"{NumMedia}","PreserveIconStackSpacing":false,"StatusText":"{SmsSid}","Subhead":"{OriginalRepliedMessageSender}","SubstatusText":"{WaId}"},"EmptySection":{"Caption":"No record found!"},"Search":{"Enabled":true,"Placeholder":"Item Search","BarcodeScanner":true,"Delay":500,"MinimumCharacterThreshold":3},"DataPaging":{"ShowLoadingIndicator":true,"LoadingIndicatorText":"Loading more items, please wait..."},"Target":{"EntitySet":"supplier_replay","Service":"/n4/Services/ajayurl.service","QueryOptions":""},"_Type":"Section.Type.ObjectTable"}],"LoadingIndicator":{"Enabled":true,"Text":"Loading, please wait..."},"_Type":"Control.Type.SectionedTable","_Name":"SectionedTable"}],"_Type":"Page","_Name":"supplier_replay_List","PrefersLargeCaption":true}

/***/ }),

/***/ "./build.definitions/Application.app":
/*!*******************************************!*\
  !*** ./build.definitions/Application.app ***!
  \*******************************************/
/***/ ((module) => {

module.exports = {"_Name":"n4","Version":"/n4/Globals/Application/AppDefinition_Version.global","MainPage":"/n4/Pages/Main.page","OnLaunch":["/n4/Actions/Service/InitializeOnline.action"],"OnWillUpdate":"/n4/Rules/Application/OnWillUpdate.js","OnDidUpdate":"/n4/Actions/Service/InitializeOnline.action","Styles":"/n4/Styles/Styles.less","Localization":"/n4/i18n/i18n.properties","_SchemaVersion":"23.12","StyleSheets":{"Styles":{"css":"/n4/Styles/Styles.css","ios":"/n4/Styles/Styles.nss","android":"/n4/Styles/Styles.json"}}}

/***/ }),

/***/ "./build.definitions/n4/Actions/Application/AppUpdate.action":
/*!*******************************************************************!*\
  !*** ./build.definitions/n4/Actions/Application/AppUpdate.action ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ApplicationUpdate","ActionResult":{"_Name":"AppUpdate"},"OnFailure":"/n4/Rules/Application/AppUpdateFailure.js","OnSuccess":"/n4/Rules/Application/AppUpdateSuccess.js"}

/***/ }),

/***/ "./build.definitions/n4/Actions/Application/AppUpdateFailureMessage.action":
/*!*********************************************************************************!*\
  !*** ./build.definitions/n4/Actions/Application/AppUpdateFailureMessage.action ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Failed to update application - {#ActionResults:AppUpdate/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/n4/Actions/Application/AppUpdateProgressBanner.action":
/*!*********************************************************************************!*\
  !*** ./build.definitions/n4/Actions/Application/AppUpdateProgressBanner.action ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"CompletionTimeout":3,"Message":"Checking for Updates...","OnSuccess":"/n4/Actions/Application/AppUpdate.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/n4/Actions/Application/AppUpdateSuccessMessage.action":
/*!*********************************************************************************!*\
  !*** ./build.definitions/n4/Actions/Application/AppUpdateSuccessMessage.action ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Update application complete","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/n4/Actions/Application/Logout.action":
/*!****************************************************************!*\
  !*** ./build.definitions/n4/Actions/Application/Logout.action ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Logout","SkipReset":true}

/***/ }),

/***/ "./build.definitions/n4/Actions/Application/NavToAbout.action":
/*!********************************************************************!*\
  !*** ./build.definitions/n4/Actions/Application/NavToAbout.action ***!
  \********************************************************************/
/***/ ((module) => {

module.exports = {"ModalPage":true,"PageToOpen":"/n4/Pages/Application/About.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/n4/Actions/Application/NavToActivityLog.action":
/*!**************************************************************************!*\
  !*** ./build.definitions/n4/Actions/Application/NavToActivityLog.action ***!
  \**************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPage":true,"PageToOpen":"/n4/Pages/Application/UserActivityLog.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/n4/Actions/Application/NavToSupport.action":
/*!**********************************************************************!*\
  !*** ./build.definitions/n4/Actions/Application/NavToSupport.action ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = {"ModalPage":true,"NavigationType":"Cross","PageToOpen":"/n4/Pages/Application/Support.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/n4/Actions/Application/OnWillUpdate.action":
/*!**********************************************************************!*\
  !*** ./build.definitions/n4/Actions/Application/OnWillUpdate.action ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","Message":"A new version of the application is now ready to apply. Do you want to update to this version?","Title":"New Version Available!","OKCaption":"Now","CancelCaption":"Later","ActionResult":{"_Name":"OnWillUpdate"}}

/***/ }),

/***/ "./build.definitions/n4/Actions/Application/Reset.action":
/*!***************************************************************!*\
  !*** ./build.definitions/n4/Actions/Application/Reset.action ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Logout","SkipReset":false}

/***/ }),

/***/ "./build.definitions/n4/Actions/Application/ResetMessage.action":
/*!**********************************************************************!*\
  !*** ./build.definitions/n4/Actions/Application/ResetMessage.action ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","Message":"This action will remove all data and return to the Welcome screen. Any local data will be lost. Are you sure you want to continue?","Title":"Reset","OKCaption":"Yes","OnOK":"/n4/Rules/Application/ResetAppSettingsAndLogout.js","CancelCaption":"No"}

/***/ }),

/***/ "./build.definitions/n4/Actions/Application/UserMenuPopover.action":
/*!*************************************************************************!*\
  !*** ./build.definitions/n4/Actions/Application/UserMenuPopover.action ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = {"PopoverItems":[{"Enabled":true,"Icon":"sap-icon://headset","OnPress":"/n4/Actions/Application/NavToSupport.action","Title":"Support","Visible":true},{"Enabled":true,"Icon":"sap-icon://refresh","OnPress":"/n4/Actions/Application/AppUpdateProgressBanner.action","Title":"Check for Updates","Visible":"$(PLT,true,true,false)"},{"Enabled":true,"Icon":"sap-icon://hint","OnPress":"/n4/Actions/Application/NavToAbout.action","Title":"About","Visible":true},{"Enabled":true,"Icon":"sap-icon://reset","OnPress":"/n4/Actions/Application/ResetMessage.action","Title":"Reset","Visible":true},{"Enabled":true,"Icon":"sap-icon://log","OnPress":"/n4/Actions/Application/Logout.action","Title":"Logout","Visible":"/n4/Rules/Application/ClientIsMultiUserMode.js"}],"_Type":"Action.Type.PopoverMenu"}

/***/ }),

/***/ "./build.definitions/n4/Actions/Bid_reply/Bid_reply_CreateEntity.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/n4/Actions/Bid_reply/Bid_reply_CreateEntity.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"CreateLinks":[],"OnFailure":"/n4/Actions/CreateEntityFailureMessage.action","OnSuccess":"/n4/Actions/CreateEntitySuccessMessage.action","Properties":{"doc_id":"#Control:doc_id/#Value","item_name":"#Control:item_name/#Value","phone":"#Control:phone/#Value"},"Target":{"EntitySet":"Bid_reply","Service":"/n4/Services/ajayurl.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateEntity"}

/***/ }),

/***/ "./build.definitions/n4/Actions/Bid_reply/Bid_reply_DeleteEntity.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/n4/Actions/Bid_reply/Bid_reply_DeleteEntity.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"Target":{"EntitySet":"Bid_reply","Service":"/n4/Services/ajayurl.service","ReadLink":"{@odata.readLink}"},"OnSuccess":"/n4/Actions/DeleteEntitySuccessMessage.action","OnFailure":"/n4/Actions/DeleteEntityFailureMessage.action","ActionResult":{"_Name":"delete"},"_Type":"Action.Type.ODataService.DeleteEntity"}

/***/ }),

/***/ "./build.definitions/n4/Actions/Bid_reply/Bid_reply_UpdateEntity.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/n4/Actions/Bid_reply/Bid_reply_UpdateEntity.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","Target":{"EntitySet":"Bid_reply","Service":"/n4/Services/ajayurl.service","ReadLink":"{@odata.readLink}"},"Properties":{"doc_id":"#Control:doc_id/#Value","item_name":"#Control:item_name/#Value","phone":"#Control:phone/#Value"},"UpdateLinks":[],"ActionResult":{"_Name":"update"},"OnSuccess":"/n4/Actions/UpdateEntitySuccessMessage.action","OnFailure":"/n4/Actions/UpdateEntityFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/n4/Actions/Bid_reply/NavToBid_reply_Create.action":
/*!*****************************************************************************!*\
  !*** ./build.definitions/n4/Actions/Bid_reply/NavToBid_reply_Create.action ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/n4/Pages/Bid_reply/Bid_reply_Create.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/n4/Actions/Bid_reply/NavToBid_reply_Detail.action":
/*!*****************************************************************************!*\
  !*** ./build.definitions/n4/Actions/Bid_reply/NavToBid_reply_Detail.action ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/n4/Pages/Bid_reply/Bid_reply_Detail.page"}

/***/ }),

/***/ "./build.definitions/n4/Actions/Bid_reply/NavToBid_reply_Edit.action":
/*!***************************************************************************!*\
  !*** ./build.definitions/n4/Actions/Bid_reply/NavToBid_reply_Edit.action ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/n4/Pages/Bid_reply/Bid_reply_Edit.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/n4/Actions/Bid_reply/NavToBid_reply_List.action":
/*!***************************************************************************!*\
  !*** ./build.definitions/n4/Actions/Bid_reply/NavToBid_reply_List.action ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/n4/Pages/Bid_reply/Bid_reply_List.page"}

/***/ }),

/***/ "./build.definitions/n4/Actions/CloseModalPage_Cancel.action":
/*!*******************************************************************!*\
  !*** ./build.definitions/n4/Actions/CloseModalPage_Cancel.action ***!
  \*******************************************************************/
/***/ ((module) => {

module.exports = {"DismissModal":"Action.Type.ClosePage.Canceled","CancelPendingActions":true,"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/n4/Actions/CloseModalPage_Complete.action":
/*!*********************************************************************!*\
  !*** ./build.definitions/n4/Actions/CloseModalPage_Complete.action ***!
  \*********************************************************************/
/***/ ((module) => {

module.exports = {"DismissModal":"Action.Type.ClosePage.Completed","CancelPendingActions":false,"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/n4/Actions/ClosePage.action":
/*!*******************************************************!*\
  !*** ./build.definitions/n4/Actions/ClosePage.action ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ClosePage"}

/***/ }),

/***/ "./build.definitions/n4/Actions/CreateEntityFailureMessage.action":
/*!************************************************************************!*\
  !*** ./build.definitions/n4/Actions/CreateEntityFailureMessage.action ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Create entity failure - {#ActionResults:create/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/n4/Actions/CreateEntitySuccessMessage.action":
/*!************************************************************************!*\
  !*** ./build.definitions/n4/Actions/CreateEntitySuccessMessage.action ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Entity created","IsIconHidden":true,"OnSuccess":"/n4/Actions/CloseModalPage_Complete.action","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/n4/Actions/DeleteConfirmation.action":
/*!****************************************************************!*\
  !*** ./build.definitions/n4/Actions/DeleteConfirmation.action ***!
  \****************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","Message":"Delete current entity?","Title":"Confirmation","OKCaption":"OK","CancelCaption":"Cancel","ActionResult":{"_Name":"DeleteConfirmation"}}

/***/ }),

/***/ "./build.definitions/n4/Actions/DeleteEntityFailureMessage.action":
/*!************************************************************************!*\
  !*** ./build.definitions/n4/Actions/DeleteEntityFailureMessage.action ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Delete entity failure - {#ActionResults:delete/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/n4/Actions/DeleteEntitySuccessMessage.action":
/*!************************************************************************!*\
  !*** ./build.definitions/n4/Actions/DeleteEntitySuccessMessage.action ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Entity deleted","Icon":"","IsIconHidden":false,"NumberOfLines":2,"OnSuccess":"/n4/Actions/CloseModalPage_Complete.action","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/n4/Actions/GenericBannerMessage.action":
/*!******************************************************************!*\
  !*** ./build.definitions/n4/Actions/GenericBannerMessage.action ***!
  \******************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.BannerMessage","ActionResult":{"_Name":"GenericBannerMessage"},"Message":"Message"}

/***/ }),

/***/ "./build.definitions/n4/Actions/GenericMessageBox.action":
/*!***************************************************************!*\
  !*** ./build.definitions/n4/Actions/GenericMessageBox.action ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","ActionResult":{"_Name":"GenericMessageBox"},"Message":"Message","OKCaption":"OK"}

/***/ }),

/***/ "./build.definitions/n4/Actions/GenericNavigation.action":
/*!***************************************************************!*\
  !*** ./build.definitions/n4/Actions/GenericNavigation.action ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"GenericNavigation"},"PageToOpen":"/n4/Pages/Main.page"}

/***/ }),

/***/ "./build.definitions/n4/Actions/GenericToastMessage.action":
/*!*****************************************************************!*\
  !*** ./build.definitions/n4/Actions/GenericToastMessage.action ***!
  \*****************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ToastMessage","ActionResult":{"_Name":"GenericToastMessage"},"Message":"Message"}

/***/ }),

/***/ "./build.definitions/n4/Actions/Header_table/Header_table_CreateEntity.action":
/*!************************************************************************************!*\
  !*** ./build.definitions/n4/Actions/Header_table/Header_table_CreateEntity.action ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = {"CreateLinks":[],"OnFailure":"/n4/Actions/CreateEntityFailureMessage.action","OnSuccess":"/n4/Actions/CreateEntitySuccessMessage.action","Properties":{"doc_id":"#Control:doc_id/#Value","status":"#Control:status/#Value","date_created":"#Control:date_created/#Value"},"Target":{"EntitySet":"Header_table","Service":"/n4/Services/ajayurl.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateEntity"}

/***/ }),

/***/ "./build.definitions/n4/Actions/Header_table/Header_table_CreateItem_table.action":
/*!****************************************************************************************!*\
  !*** ./build.definitions/n4/Actions/Header_table/Header_table_CreateItem_table.action ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = {"ParentLink":{"Property":"header_item_rel","Target":{"EntitySet":"Header_table","ReadLink":"{@odata.readLink}"}},"OnFailure":"/n4/Actions/CreateEntityFailureMessage.action","OnSuccess":"/n4/Actions/CreateEntitySuccessMessage.action","Properties":{"doc_id":"#Control:doc_id/#SelectedValue","itemid":"#Control:itemid/#Value","item_name":"#Control:item_name/#Value","price":"#Control:price/#Value","quantity":"#Control:quantity/#Value"},"Target":{"EntitySet":"Item_table","Service":"/n4/Services/ajayurl.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateRelatedEntity"}

/***/ }),

/***/ "./build.definitions/n4/Actions/Header_table/Header_table_CreateSupplier_bid_table.action":
/*!************************************************************************************************!*\
  !*** ./build.definitions/n4/Actions/Header_table/Header_table_CreateSupplier_bid_table.action ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = {"ParentLink":{"Property":"header_supplier_bid_rel","Target":{"EntitySet":"Header_table","ReadLink":"{@odata.readLink}"}},"OnFailure":"/n4/Actions/CreateEntityFailureMessage.action","OnSuccess":"/n4/Actions/CreateEntitySuccessMessage.action","Properties":{"doc_id":"#Control:doc_id/#SelectedValue","invitationId":"#Control:invitationId/#Value","item_id":"#Control:item_id/#Value","item_name":"#Control:item_name/#Value","supp_quot_price":"#Control:supp_quot_price/#Value","supp_quot_quantity":"#Control:supp_quot_quantity/#Value","price":"#Control:price/#Value","quantity":"#Control:quantity/#Value","status":"#Control:status/#Value"},"Target":{"EntitySet":"Supplier_bid_table","Service":"/n4/Services/ajayurl.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateRelatedEntity"}

/***/ }),

/***/ "./build.definitions/n4/Actions/Header_table/Header_table_CreateSupplier_table.action":
/*!********************************************************************************************!*\
  !*** ./build.definitions/n4/Actions/Header_table/Header_table_CreateSupplier_table.action ***!
  \********************************************************************************************/
/***/ ((module) => {

module.exports = {"ParentLink":{"Property":"header_supplier_rel","Target":{"EntitySet":"Header_table","ReadLink":"{@odata.readLink}"}},"OnFailure":"/n4/Actions/CreateEntityFailureMessage.action","OnSuccess":"/n4/Actions/CreateEntitySuccessMessage.action","Properties":{"doc_id":"#Control:doc_id/#SelectedValue","invitationId":"#Control:invitationId/#Value","smvendor_id":"#Control:smvendor_id/#Value","phone_main":"#Control:phone_main/#Value","status":"#Control:status/#Value"},"Target":{"EntitySet":"Supplier_table","Service":"/n4/Services/ajayurl.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateRelatedEntity"}

/***/ }),

/***/ "./build.definitions/n4/Actions/Header_table/Header_table_DeleteEntity.action":
/*!************************************************************************************!*\
  !*** ./build.definitions/n4/Actions/Header_table/Header_table_DeleteEntity.action ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = {"Target":{"EntitySet":"Header_table","Service":"/n4/Services/ajayurl.service","ReadLink":"{@odata.readLink}"},"OnSuccess":"/n4/Actions/DeleteEntitySuccessMessage.action","OnFailure":"/n4/Actions/DeleteEntityFailureMessage.action","ActionResult":{"_Name":"delete"},"_Type":"Action.Type.ODataService.DeleteEntity"}

/***/ }),

/***/ "./build.definitions/n4/Actions/Header_table/Header_table_DetailPopover.action":
/*!*************************************************************************************!*\
  !*** ./build.definitions/n4/Actions/Header_table/Header_table_DetailPopover.action ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = {"PopoverItems":[{"Title":"Add Item_table","OnPress":"/n4/Actions/Header_table/NavToHeader_table_CreateItem_table.action"},{"Title":"Add Supplier_table","OnPress":"/n4/Actions/Header_table/NavToHeader_table_CreateSupplier_table.action"},{"Title":"Add Supplier_bid_table","OnPress":"/n4/Actions/Header_table/NavToHeader_table_CreateSupplier_bid_table.action"},{"Title":"Delete","OnPress":"/n4/Rules/Header_table/Header_table_DeleteConfirmation.js"}],"_Type":"Action.Type.PopoverMenu"}

/***/ }),

/***/ "./build.definitions/n4/Actions/Header_table/Header_table_UpdateEntity.action":
/*!************************************************************************************!*\
  !*** ./build.definitions/n4/Actions/Header_table/Header_table_UpdateEntity.action ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","Target":{"EntitySet":"Header_table","Service":"/n4/Services/ajayurl.service","ReadLink":"{@odata.readLink}"},"Properties":{"doc_id":"#Control:doc_id/#Value","status":"#Control:status/#Value","date_created":"#Control:date_created/#Value"},"UpdateLinks":[],"ActionResult":{"_Name":"update"},"OnSuccess":"/n4/Actions/UpdateEntitySuccessMessage.action","OnFailure":"/n4/Actions/UpdateEntityFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/n4/Actions/Header_table/NavToHeader_table_Create.action":
/*!***********************************************************************************!*\
  !*** ./build.definitions/n4/Actions/Header_table/NavToHeader_table_Create.action ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/n4/Pages/Header_table/Header_table_Create.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/n4/Actions/Header_table/NavToHeader_table_CreateItem_table.action":
/*!*********************************************************************************************!*\
  !*** ./build.definitions/n4/Actions/Header_table/NavToHeader_table_CreateItem_table.action ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/n4/Pages/Header_table/Header_table_CreateItem_table.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/n4/Actions/Header_table/NavToHeader_table_CreateSupplier_bid_table.action":
/*!*****************************************************************************************************!*\
  !*** ./build.definitions/n4/Actions/Header_table/NavToHeader_table_CreateSupplier_bid_table.action ***!
  \*****************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/n4/Pages/Header_table/Header_table_CreateSupplier_bid_table.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/n4/Actions/Header_table/NavToHeader_table_CreateSupplier_table.action":
/*!*************************************************************************************************!*\
  !*** ./build.definitions/n4/Actions/Header_table/NavToHeader_table_CreateSupplier_table.action ***!
  \*************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/n4/Pages/Header_table/Header_table_CreateSupplier_table.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/n4/Actions/Header_table/NavToHeader_table_Detail.action":
/*!***********************************************************************************!*\
  !*** ./build.definitions/n4/Actions/Header_table/NavToHeader_table_Detail.action ***!
  \***********************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/n4/Pages/Header_table/Header_table_Detail.page"}

/***/ }),

/***/ "./build.definitions/n4/Actions/Header_table/NavToHeader_table_Edit.action":
/*!*********************************************************************************!*\
  !*** ./build.definitions/n4/Actions/Header_table/NavToHeader_table_Edit.action ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/n4/Pages/Header_table/Header_table_Edit.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/n4/Actions/Header_table/NavToHeader_table_List.action":
/*!*********************************************************************************!*\
  !*** ./build.definitions/n4/Actions/Header_table/NavToHeader_table_List.action ***!
  \*********************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/n4/Pages/Header_table/Header_table_List.page"}

/***/ }),

/***/ "./build.definitions/n4/Actions/Item_table/Item_table_CreateEntity.action":
/*!********************************************************************************!*\
  !*** ./build.definitions/n4/Actions/Item_table/Item_table_CreateEntity.action ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = {"CreateLinks":[],"OnFailure":"/n4/Actions/CreateEntityFailureMessage.action","OnSuccess":"/n4/Actions/CreateEntitySuccessMessage.action","Properties":{"doc_id":"#Control:doc_id/#SelectedValue","itemid":"#Control:itemid/#Value","item_name":"#Control:item_name/#Value","price":"#Control:price/#Value","quantity":"#Control:quantity/#Value"},"Target":{"EntitySet":"Item_table","Service":"/n4/Services/ajayurl.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateEntity"}

/***/ }),

/***/ "./build.definitions/n4/Actions/Item_table/Item_table_DeleteEntity.action":
/*!********************************************************************************!*\
  !*** ./build.definitions/n4/Actions/Item_table/Item_table_DeleteEntity.action ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = {"Target":{"EntitySet":"Item_table","Service":"/n4/Services/ajayurl.service","ReadLink":"{@odata.readLink}"},"OnSuccess":"/n4/Actions/DeleteEntitySuccessMessage.action","OnFailure":"/n4/Actions/DeleteEntityFailureMessage.action","ActionResult":{"_Name":"delete"},"_Type":"Action.Type.ODataService.DeleteEntity"}

/***/ }),

/***/ "./build.definitions/n4/Actions/Item_table/Item_table_UpdateEntity.action":
/*!********************************************************************************!*\
  !*** ./build.definitions/n4/Actions/Item_table/Item_table_UpdateEntity.action ***!
  \********************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","Target":{"EntitySet":"Item_table","Service":"/n4/Services/ajayurl.service","ReadLink":"{@odata.readLink}"},"Properties":{"doc_id":"#Control:doc_id/#SelectedValue","itemid":"#Control:itemid/#Value","item_name":"#Control:item_name/#Value","price":"#Control:price/#Value","quantity":"#Control:quantity/#Value"},"UpdateLinks":[],"ActionResult":{"_Name":"update"},"OnSuccess":"/n4/Actions/UpdateEntitySuccessMessage.action","OnFailure":"/n4/Actions/UpdateEntityFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/n4/Actions/Item_table/NavToItem_table_Create.action":
/*!*******************************************************************************!*\
  !*** ./build.definitions/n4/Actions/Item_table/NavToItem_table_Create.action ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/n4/Pages/Item_table/Item_table_Create.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/n4/Actions/Item_table/NavToItem_table_Detail.action":
/*!*******************************************************************************!*\
  !*** ./build.definitions/n4/Actions/Item_table/NavToItem_table_Detail.action ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/n4/Pages/Item_table/Item_table_Detail.page"}

/***/ }),

/***/ "./build.definitions/n4/Actions/Item_table/NavToItem_table_Edit.action":
/*!*****************************************************************************!*\
  !*** ./build.definitions/n4/Actions/Item_table/NavToItem_table_Edit.action ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/n4/Pages/Item_table/Item_table_Edit.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/n4/Actions/Item_table/NavToItem_table_List.action":
/*!*****************************************************************************!*\
  !*** ./build.definitions/n4/Actions/Item_table/NavToItem_table_List.action ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/n4/Pages/Item_table/Item_table_List.page"}

/***/ }),

/***/ "./build.definitions/n4/Actions/Logging/LogUploadFailure.action":
/*!**********************************************************************!*\
  !*** ./build.definitions/n4/Actions/Logging/LogUploadFailure.action ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Uploading log file failed with error: {#ActionResults:UploadLog/error}","OKCaption":"OK","Title":"Log Upload Failed","_Type":"Action.Type.Message"}

/***/ }),

/***/ "./build.definitions/n4/Actions/Logging/LogUploadSuccessful.action":
/*!*************************************************************************!*\
  !*** ./build.definitions/n4/Actions/Logging/LogUploadSuccessful.action ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":3,"IsIconHidden":false,"MaxNumberOfLines":1,"Message":"Log File Uploaded","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/n4/Actions/Logging/UploadLog.action":
/*!***************************************************************!*\
  !*** ./build.definitions/n4/Actions/Logging/UploadLog.action ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = {"ActionResult":{"_Name":"UploadLog"},"ActivityIndicatorText":"Uploading...","OnFailure":"/n4/Actions/Logging/LogUploadFailure.action","OnSuccess":"/n4/Actions/Logging/LogUploadSuccessful.action","ShowActivityIndicator":false,"_Type":"Action.Type.Logger.Upload"}

/***/ }),

/***/ "./build.definitions/n4/Actions/Logging/UploadLogProgress.action":
/*!***********************************************************************!*\
  !*** ./build.definitions/n4/Actions/Logging/UploadLogProgress.action ***!
  \***********************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"CompletionMessage":"Logs Uploaded","CompletionTimeout":2,"Message":"Uploading Log Files...","OnSuccess":"/n4/Actions/Logging/UploadLog.action","_Type":"Action.Type.ProgressBanner"}

/***/ }),

/***/ "./build.definitions/n4/Actions/Service/InitializeOnline.action":
/*!**********************************************************************!*\
  !*** ./build.definitions/n4/Actions/Service/InitializeOnline.action ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = {"Service":"/n4/Services/ajayurl.service","_Type":"Action.Type.ODataService.Initialize","ShowActivityIndicator":true,"OnSuccess":"/n4/Actions/Service/InitializeOnlineSuccessMessage.action","OnFailure":"/n4/Actions/Service/InitializeOnlineFailureMessage.action","ActionResult":{"_Name":"init"}}

/***/ }),

/***/ "./build.definitions/n4/Actions/Service/InitializeOnlineFailureMessage.action":
/*!************************************************************************************!*\
  !*** ./build.definitions/n4/Actions/Service/InitializeOnlineFailureMessage.action ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Failed to initialize application data service - {#ActionResults:init/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/n4/Actions/Service/InitializeOnlineSuccessMessage.action":
/*!************************************************************************************!*\
  !*** ./build.definitions/n4/Actions/Service/InitializeOnlineSuccessMessage.action ***!
  \************************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Application data service initialized","IsIconHidden":true,"NumberOfLines":2,"_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/n4/Actions/Supplier_bid_table/NavToSupplier_bid_table_Create.action":
/*!***********************************************************************************************!*\
  !*** ./build.definitions/n4/Actions/Supplier_bid_table/NavToSupplier_bid_table_Create.action ***!
  \***********************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/n4/Pages/Supplier_bid_table/Supplier_bid_table_Create.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/n4/Actions/Supplier_bid_table/NavToSupplier_bid_table_Detail.action":
/*!***********************************************************************************************!*\
  !*** ./build.definitions/n4/Actions/Supplier_bid_table/NavToSupplier_bid_table_Detail.action ***!
  \***********************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/n4/Pages/Supplier_bid_table/Supplier_bid_table_Detail.page"}

/***/ }),

/***/ "./build.definitions/n4/Actions/Supplier_bid_table/NavToSupplier_bid_table_Edit.action":
/*!*********************************************************************************************!*\
  !*** ./build.definitions/n4/Actions/Supplier_bid_table/NavToSupplier_bid_table_Edit.action ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/n4/Pages/Supplier_bid_table/Supplier_bid_table_Edit.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/n4/Actions/Supplier_bid_table/NavToSupplier_bid_table_List.action":
/*!*********************************************************************************************!*\
  !*** ./build.definitions/n4/Actions/Supplier_bid_table/NavToSupplier_bid_table_List.action ***!
  \*********************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/n4/Pages/Supplier_bid_table/Supplier_bid_table_List.page"}

/***/ }),

/***/ "./build.definitions/n4/Actions/Supplier_bid_table/Supplier_bid_table_CreateEntity.action":
/*!************************************************************************************************!*\
  !*** ./build.definitions/n4/Actions/Supplier_bid_table/Supplier_bid_table_CreateEntity.action ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = {"CreateLinks":[],"OnFailure":"/n4/Actions/CreateEntityFailureMessage.action","OnSuccess":"/n4/Actions/CreateEntitySuccessMessage.action","Properties":{"doc_id":"#Control:doc_id/#SelectedValue","invitationId":"#Control:invitationId/#Value","item_id":"#Control:item_id/#Value","item_name":"#Control:item_name/#Value","supp_quot_price":"#Control:supp_quot_price/#Value","supp_quot_quantity":"#Control:supp_quot_quantity/#Value","price":"#Control:price/#Value","quantity":"#Control:quantity/#Value","status":"#Control:status/#Value"},"Target":{"EntitySet":"Supplier_bid_table","Service":"/n4/Services/ajayurl.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateEntity"}

/***/ }),

/***/ "./build.definitions/n4/Actions/Supplier_bid_table/Supplier_bid_table_DeleteEntity.action":
/*!************************************************************************************************!*\
  !*** ./build.definitions/n4/Actions/Supplier_bid_table/Supplier_bid_table_DeleteEntity.action ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = {"Target":{"EntitySet":"Supplier_bid_table","Service":"/n4/Services/ajayurl.service","ReadLink":"{@odata.readLink}"},"OnSuccess":"/n4/Actions/DeleteEntitySuccessMessage.action","OnFailure":"/n4/Actions/DeleteEntityFailureMessage.action","ActionResult":{"_Name":"delete"},"_Type":"Action.Type.ODataService.DeleteEntity"}

/***/ }),

/***/ "./build.definitions/n4/Actions/Supplier_bid_table/Supplier_bid_table_UpdateEntity.action":
/*!************************************************************************************************!*\
  !*** ./build.definitions/n4/Actions/Supplier_bid_table/Supplier_bid_table_UpdateEntity.action ***!
  \************************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","ActionResult":{"_Name":"update"},"OnFailure":"/n4/Actions/UpdateEntityFailureMessage.action","OnSuccess":"/n4/Actions/UpdateEntitySuccessMessage.action","ValidationRule":"/n4/Rules/l.js","Target":{"EntitySet":"Supplier_bid_table","Service":"/n4/Services/ajayurl.service","ReadLink":"{@odata.readLink}"},"Properties":{"doc_id":"#Control:doc_id/#SelectedValue","invitationId":"#Control:invitationId/#Value","item_id":"#Control:item_id/#Value","item_name":"#Control:item_name/#Value","supp_quot_price":"#Control:supp_quot_price/#Value","supp_quot_quantity":"#Control:supp_quot_quantity/#Value","price":"#Control:price/#Value","quantity":"#Control:quantity/#Value","status":"#Control:status/#Value"}}

/***/ }),

/***/ "./build.definitions/n4/Actions/Supplier_table/NavToSupplier_table_Create.action":
/*!***************************************************************************************!*\
  !*** ./build.definitions/n4/Actions/Supplier_table/NavToSupplier_table_Create.action ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/n4/Pages/Supplier_table/Supplier_table_Create.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/n4/Actions/Supplier_table/NavToSupplier_table_CreateSupplier_bid_table.action":
/*!*********************************************************************************************************!*\
  !*** ./build.definitions/n4/Actions/Supplier_table/NavToSupplier_table_CreateSupplier_bid_table.action ***!
  \*********************************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/n4/Pages/Supplier_table/Supplier_table_CreateSupplier_bid_table.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/n4/Actions/Supplier_table/NavToSupplier_table_Detail.action":
/*!***************************************************************************************!*\
  !*** ./build.definitions/n4/Actions/Supplier_table/NavToSupplier_table_Detail.action ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/n4/Pages/Supplier_table/Supplier_table_Detail.page"}

/***/ }),

/***/ "./build.definitions/n4/Actions/Supplier_table/NavToSupplier_table_Edit.action":
/*!*************************************************************************************!*\
  !*** ./build.definitions/n4/Actions/Supplier_table/NavToSupplier_table_Edit.action ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/n4/Pages/Supplier_table/Supplier_table_Edit.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/n4/Actions/Supplier_table/NavToSupplier_table_List.action":
/*!*************************************************************************************!*\
  !*** ./build.definitions/n4/Actions/Supplier_table/NavToSupplier_table_List.action ***!
  \*************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/n4/Pages/Supplier_table/Supplier_table_List.page"}

/***/ }),

/***/ "./build.definitions/n4/Actions/Supplier_table/Supplier_table_CreateEntity.action":
/*!****************************************************************************************!*\
  !*** ./build.definitions/n4/Actions/Supplier_table/Supplier_table_CreateEntity.action ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = {"CreateLinks":[],"OnFailure":"/n4/Actions/CreateEntityFailureMessage.action","OnSuccess":"/n4/Actions/CreateEntitySuccessMessage.action","Properties":{"doc_id":"#Control:doc_id/#SelectedValue","invitationId":"#Control:invitationId/#Value","smvendor_id":"#Control:smvendor_id/#Value","phone_main":"#Control:phone_main/#Value","status":"#Control:status/#Value"},"Target":{"EntitySet":"Supplier_table","Service":"/n4/Services/ajayurl.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateEntity"}

/***/ }),

/***/ "./build.definitions/n4/Actions/Supplier_table/Supplier_table_CreateSupplier_bid_table.action":
/*!****************************************************************************************************!*\
  !*** ./build.definitions/n4/Actions/Supplier_table/Supplier_table_CreateSupplier_bid_table.action ***!
  \****************************************************************************************************/
/***/ ((module) => {

module.exports = {"ParentLink":{"Property":"supplier_to_sbid","Target":{"EntitySet":"Supplier_table","ReadLink":"{@odata.readLink}"}},"OnFailure":"/n4/Actions/CreateEntityFailureMessage.action","OnSuccess":"/n4/Actions/CreateEntitySuccessMessage.action","Properties":{"doc_id":"#Control:doc_id/#SelectedValue","invitationId":"#Control:invitationId/#Value","item_id":"#Control:item_id/#Value","item_name":"#Control:item_name/#Value","supp_quot_price":"#Control:supp_quot_price/#Value","supp_quot_quantity":"#Control:supp_quot_quantity/#Value","price":"#Control:price/#Value","quantity":"#Control:quantity/#Value","status":"#Control:status/#Value"},"Target":{"EntitySet":"Supplier_bid_table","Service":"/n4/Services/ajayurl.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateRelatedEntity"}

/***/ }),

/***/ "./build.definitions/n4/Actions/Supplier_table/Supplier_table_DeleteEntity.action":
/*!****************************************************************************************!*\
  !*** ./build.definitions/n4/Actions/Supplier_table/Supplier_table_DeleteEntity.action ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = {"Target":{"EntitySet":"Supplier_table","Service":"/n4/Services/ajayurl.service","ReadLink":"{@odata.readLink}"},"OnSuccess":"/n4/Actions/DeleteEntitySuccessMessage.action","OnFailure":"/n4/Actions/DeleteEntityFailureMessage.action","ActionResult":{"_Name":"delete"},"_Type":"Action.Type.ODataService.DeleteEntity"}

/***/ }),

/***/ "./build.definitions/n4/Actions/Supplier_table/Supplier_table_DetailPopover.action":
/*!*****************************************************************************************!*\
  !*** ./build.definitions/n4/Actions/Supplier_table/Supplier_table_DetailPopover.action ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = {"PopoverItems":[{"Title":"Add Supplier_bid_table","OnPress":"/n4/Actions/Supplier_table/NavToSupplier_table_CreateSupplier_bid_table.action"},{"Title":"Delete","OnPress":"/n4/Rules/Supplier_table/Supplier_table_DeleteConfirmation.js"}],"_Type":"Action.Type.PopoverMenu"}

/***/ }),

/***/ "./build.definitions/n4/Actions/Supplier_table/Supplier_table_UpdateEntity.action":
/*!****************************************************************************************!*\
  !*** ./build.definitions/n4/Actions/Supplier_table/Supplier_table_UpdateEntity.action ***!
  \****************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","Target":{"EntitySet":"Supplier_table","Service":"/n4/Services/ajayurl.service","ReadLink":"{@odata.readLink}"},"Properties":{"doc_id":"#Control:doc_id/#SelectedValue","invitationId":"#Control:invitationId/#Value","smvendor_id":"#Control:smvendor_id/#Value","phone_main":"#Control:phone_main/#Value","status":"#Control:status/#Value"},"UpdateLinks":[],"ActionResult":{"_Name":"update"},"OnSuccess":"/n4/Actions/UpdateEntitySuccessMessage.action","OnFailure":"/n4/Actions/UpdateEntityFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/n4/Actions/Timestamp/NavToTimestamp_Create.action":
/*!*****************************************************************************!*\
  !*** ./build.definitions/n4/Actions/Timestamp/NavToTimestamp_Create.action ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/n4/Pages/Timestamp/Timestamp_Create.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/n4/Actions/Timestamp/NavToTimestamp_Detail.action":
/*!*****************************************************************************!*\
  !*** ./build.definitions/n4/Actions/Timestamp/NavToTimestamp_Detail.action ***!
  \*****************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/n4/Pages/Timestamp/Timestamp_Detail.page"}

/***/ }),

/***/ "./build.definitions/n4/Actions/Timestamp/NavToTimestamp_Edit.action":
/*!***************************************************************************!*\
  !*** ./build.definitions/n4/Actions/Timestamp/NavToTimestamp_Edit.action ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/n4/Pages/Timestamp/Timestamp_Edit.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/n4/Actions/Timestamp/NavToTimestamp_List.action":
/*!***************************************************************************!*\
  !*** ./build.definitions/n4/Actions/Timestamp/NavToTimestamp_List.action ***!
  \***************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/n4/Pages/Timestamp/Timestamp_List.page"}

/***/ }),

/***/ "./build.definitions/n4/Actions/Timestamp/Timestamp_CreateEntity.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/n4/Actions/Timestamp/Timestamp_CreateEntity.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"CreateLinks":[],"OnFailure":"/n4/Actions/CreateEntityFailureMessage.action","OnSuccess":"/n4/Actions/CreateEntitySuccessMessage.action","Properties":{"timestamp":"#Control:timestamp/#Value"},"Target":{"EntitySet":"Timestamp","Service":"/n4/Services/ajayurl.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateEntity"}

/***/ }),

/***/ "./build.definitions/n4/Actions/Timestamp/Timestamp_DeleteEntity.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/n4/Actions/Timestamp/Timestamp_DeleteEntity.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"Target":{"EntitySet":"Timestamp","Service":"/n4/Services/ajayurl.service","ReadLink":"{@odata.readLink}"},"OnSuccess":"/n4/Actions/DeleteEntitySuccessMessage.action","OnFailure":"/n4/Actions/DeleteEntityFailureMessage.action","ActionResult":{"_Name":"delete"},"_Type":"Action.Type.ODataService.DeleteEntity"}

/***/ }),

/***/ "./build.definitions/n4/Actions/Timestamp/Timestamp_UpdateEntity.action":
/*!******************************************************************************!*\
  !*** ./build.definitions/n4/Actions/Timestamp/Timestamp_UpdateEntity.action ***!
  \******************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","Target":{"EntitySet":"Timestamp","Service":"/n4/Services/ajayurl.service","ReadLink":"{@odata.readLink}"},"Properties":{"timestamp":"#Control:timestamp/#Value"},"UpdateLinks":[],"ActionResult":{"_Name":"update"},"OnSuccess":"/n4/Actions/UpdateEntitySuccessMessage.action","OnFailure":"/n4/Actions/UpdateEntityFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/n4/Actions/UpdateEntityFailureMessage.action":
/*!************************************************************************!*\
  !*** ./build.definitions/n4/Actions/UpdateEntityFailureMessage.action ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"Message":"Update entity failure - {#ActionResults:update/error}","Duration":7,"Animated":true,"_Type":"Action.Type.BannerMessage"}

/***/ }),

/***/ "./build.definitions/n4/Actions/UpdateEntitySuccessMessage.action":
/*!************************************************************************!*\
  !*** ./build.definitions/n4/Actions/UpdateEntitySuccessMessage.action ***!
  \************************************************************************/
/***/ ((module) => {

module.exports = {"Animated":true,"Duration":2,"Message":"Entity updated","Icon":"","IsIconHidden":false,"NumberOfLines":2,"OnSuccess":"/n4/Actions/CloseModalPage_Complete.action","_Type":"Action.Type.ToastMessage"}

/***/ }),

/***/ "./build.definitions/n4/Actions/Validation.action":
/*!********************************************************!*\
  !*** ./build.definitions/n4/Actions/Validation.action ***!
  \********************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"Validation"}}

/***/ }),

/***/ "./build.definitions/n4/Actions/ValidationFailure.action":
/*!***************************************************************!*\
  !*** ./build.definitions/n4/Actions/ValidationFailure.action ***!
  \***************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Message","ActionResult":{"_Name":"ValidationFailure"},"Message":"*Fill The  Mandatory Fields  / Price Must Be >= Base Price*","Title":"Required Field","OKCaption":"OK"}

/***/ }),

/***/ "./build.definitions/n4/Actions/lodg_to_login.action":
/*!***********************************************************!*\
  !*** ./build.definitions/n4/Actions/lodg_to_login.action ***!
  \***********************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"lodg_to_login"},"PageToOpen":"/n4/Pages/demo.page"}

/***/ }),

/***/ "./build.definitions/n4/Actions/login_to_dshbd.action":
/*!************************************************************!*\
  !*** ./build.definitions/n4/Actions/login_to_dshbd.action ***!
  \************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"login_to_dshbd"},"PageToOpen":"/n4/Pages/M.page"}

/***/ }),

/***/ "./build.definitions/n4/Actions/login_to_reg.action":
/*!**********************************************************!*\
  !*** ./build.definitions/n4/Actions/login_to_reg.action ***!
  \**********************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","ActionResult":{"_Name":"login_to_reg"},"PageToOpen":"/n4/Pages/Registration.page","NavigationType":"Inner"}

/***/ }),

/***/ "./build.definitions/n4/Actions/supplier_replay/NavTosupplier_replay_Create.action":
/*!*****************************************************************************************!*\
  !*** ./build.definitions/n4/Actions/supplier_replay/NavTosupplier_replay_Create.action ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/n4/Pages/supplier_replay/supplier_replay_Create.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/n4/Actions/supplier_replay/NavTosupplier_replay_Detail.action":
/*!*****************************************************************************************!*\
  !*** ./build.definitions/n4/Actions/supplier_replay/NavTosupplier_replay_Detail.action ***!
  \*****************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/n4/Pages/supplier_replay/supplier_replay_Detail.page"}

/***/ }),

/***/ "./build.definitions/n4/Actions/supplier_replay/NavTosupplier_replay_Edit.action":
/*!***************************************************************************************!*\
  !*** ./build.definitions/n4/Actions/supplier_replay/NavTosupplier_replay_Edit.action ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = {"ModalPageFullscreen":false,"ModalPage":true,"PageToOpen":"/n4/Pages/supplier_replay/supplier_replay_Edit.page","_Type":"Action.Type.Navigation"}

/***/ }),

/***/ "./build.definitions/n4/Actions/supplier_replay/NavTosupplier_replay_List.action":
/*!***************************************************************************************!*\
  !*** ./build.definitions/n4/Actions/supplier_replay/NavTosupplier_replay_List.action ***!
  \***************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.Navigation","PageToOpen":"/n4/Pages/supplier_replay/supplier_replay_List.page"}

/***/ }),

/***/ "./build.definitions/n4/Actions/supplier_replay/supplier_replay_CreateEntity.action":
/*!******************************************************************************************!*\
  !*** ./build.definitions/n4/Actions/supplier_replay/supplier_replay_CreateEntity.action ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = {"CreateLinks":[],"OnFailure":"/n4/Actions/CreateEntityFailureMessage.action","OnSuccess":"/n4/Actions/CreateEntitySuccessMessage.action","Properties":{"OriginalRepliedMessageSender":"#Control:OriginalRepliedMessageSender/#Value","SmsMessageSid":"#Control:SmsMessageSid/#Value","NumMedia":"#Control:NumMedia/#Value","ProfileName":"#Control:ProfileName/#Value","SmsSid":"#Control:SmsSid/#Value","WaId":"#Control:WaId/#Value","SmsStatus":"#Control:SmsStatus/#Value","Body":"#Control:Body/#Value","ButtonText":"#Control:ButtonText/#Value","To":"#Control:To/#Value","ButtonPayload":"#Control:ButtonPayload/#Value","NumSegments":"#Control:NumSegments/#Value","ReferralNumMedia":"#Control:ReferralNumMedia/#Value","MessageSid":"#Control:MessageSid/#Value","AccountSid":"#Control:AccountSid/#Value","OriginalRepliedMessageSid":"#Control:OriginalRepliedMessageSid/#Value","From":"#Control:From/#Value","ApiVersion":"#Control:ApiVersion/#Value"},"Target":{"EntitySet":"supplier_replay","Service":"/n4/Services/ajayurl.service"},"ActionResult":{"_Name":"create"},"_Type":"Action.Type.ODataService.CreateEntity"}

/***/ }),

/***/ "./build.definitions/n4/Actions/supplier_replay/supplier_replay_DeleteEntity.action":
/*!******************************************************************************************!*\
  !*** ./build.definitions/n4/Actions/supplier_replay/supplier_replay_DeleteEntity.action ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = {"Target":{"EntitySet":"supplier_replay","Service":"/n4/Services/ajayurl.service","ReadLink":"{@odata.readLink}"},"OnSuccess":"/n4/Actions/DeleteEntitySuccessMessage.action","OnFailure":"/n4/Actions/DeleteEntityFailureMessage.action","ActionResult":{"_Name":"delete"},"_Type":"Action.Type.ODataService.DeleteEntity"}

/***/ }),

/***/ "./build.definitions/n4/Actions/supplier_replay/supplier_replay_UpdateEntity.action":
/*!******************************************************************************************!*\
  !*** ./build.definitions/n4/Actions/supplier_replay/supplier_replay_UpdateEntity.action ***!
  \******************************************************************************************/
/***/ ((module) => {

module.exports = {"_Type":"Action.Type.ODataService.UpdateEntity","Target":{"EntitySet":"supplier_replay","Service":"/n4/Services/ajayurl.service","ReadLink":"{@odata.readLink}"},"Properties":{"OriginalRepliedMessageSender":"#Control:OriginalRepliedMessageSender/#Value","SmsMessageSid":"#Control:SmsMessageSid/#Value","NumMedia":"#Control:NumMedia/#Value","ProfileName":"#Control:ProfileName/#Value","SmsSid":"#Control:SmsSid/#Value","WaId":"#Control:WaId/#Value","SmsStatus":"#Control:SmsStatus/#Value","Body":"#Control:Body/#Value","ButtonText":"#Control:ButtonText/#Value","To":"#Control:To/#Value","ButtonPayload":"#Control:ButtonPayload/#Value","NumSegments":"#Control:NumSegments/#Value","ReferralNumMedia":"#Control:ReferralNumMedia/#Value","MessageSid":"#Control:MessageSid/#Value","AccountSid":"#Control:AccountSid/#Value","OriginalRepliedMessageSid":"#Control:OriginalRepliedMessageSid/#Value","From":"#Control:From/#Value","ApiVersion":"#Control:ApiVersion/#Value"},"UpdateLinks":[],"ActionResult":{"_Name":"update"},"OnSuccess":"/n4/Actions/UpdateEntitySuccessMessage.action","OnFailure":"/n4/Actions/UpdateEntityFailureMessage.action"}

/***/ }),

/***/ "./build.definitions/n4/Globals/Application/AppDefinition_Version.global":
/*!*******************************************************************************!*\
  !*** ./build.definitions/n4/Globals/Application/AppDefinition_Version.global ***!
  \*******************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"1.0.0","_Type":"String"}

/***/ }),

/***/ "./build.definitions/n4/Globals/Application/ApplicationName.global":
/*!*************************************************************************!*\
  !*** ./build.definitions/n4/Globals/Application/ApplicationName.global ***!
  \*************************************************************************/
/***/ ((module) => {

module.exports = {"Value":"MDK App","_Type":"String"}

/***/ }),

/***/ "./build.definitions/n4/Globals/Application/SupportEmail.global":
/*!**********************************************************************!*\
  !*** ./build.definitions/n4/Globals/Application/SupportEmail.global ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = {"Value":"support@mycompany.com","_Type":"String"}

/***/ }),

/***/ "./build.definitions/n4/Globals/Application/SupportPhone.global":
/*!**********************************************************************!*\
  !*** ./build.definitions/n4/Globals/Application/SupportPhone.global ***!
  \**********************************************************************/
/***/ ((module) => {

module.exports = {"Value":"1-800-677-7271","_Type":"String"}

/***/ }),

/***/ "./build.definitions/n4/Services/ajayurl.service":
/*!*******************************************************!*\
  !*** ./build.definitions/n4/Services/ajayurl.service ***!
  \*******************************************************/
/***/ ((module) => {

module.exports = {"DestinationName":"ajayurl","OfflineEnabled":false,"LanguageURLParam":"","OnlineOptions":{},"OfflineOptions":{},"PathSuffix":"","SourceType":"Cloud","ServiceUrl":""}

/***/ }),

/***/ "./build.definitions/n4/Images/peol_logo (1).png":
/*!*******************************************************!*\
  !*** ./build.definitions/n4/Images/peol_logo (1).png ***!
  \*******************************************************/
/***/ ((module) => {

"use strict";
module.exports = "data:image/png;base64,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h54TJ04c3blz5+nlypU7un379pfWr1/f8vvvv29Zs2bNvStXrmw9Y8aM/hs3bnwuJFq3bNlyU6tWrea3a9duXggghQoV8u7bt68kblQej8c2YcKEsQMGDBjtdDpTOnfuvDBv3ryJO3fuLF+iRImLc+bMefuLL74Y271792+LFSt2/siRI9WXLl3aefLkye1feOGFzRs3bmwybNiwaStWrHixaNGi50LcqEKFCpfXrFlT3+PxhON4vvzyy95Xr14tJMuyeejQoR+FuONT4yAlS5b04EKrUqXK/rQsrUH9uvGvvPrq/IU//thr3fq4irlz505s3er1PS1ff33Bm2+2nTVwYL+lURFRdypVqrB36rRpIzbEbS6nl8dN3YFiq1a+9e23U9rF1qql7+qrli9tN3rUmG+OnjyVa8VPP7Wbu2BevzXr46rjolm1fHm7qd9NGbFp2/by+H3j+vWvfzl+wtjtO3eUXvbTT2+Nn/DVx5u3bsYdRy8Eh5+32nfcmC06262vJ03q3OfddxeWKV36WO8+fcaHJrhBvXq/DR08eHSO6Dw327Z/c8OOXb9UzJs377U0YoEe1os7+8yZM/vt3bW76bwfF7ywY8eOV0Z9+NHEX3bvKj1m1JhJVqtVHjZ8GAJEj5Vq9kqzPT179JxYsEjBs680bbpn9549lfPnz38pxCHmz53bY8OGDW8gQL788ouPfvzxx345c+a8smTJsvqRkZHey5cv53vtteY7jx8/UWjZsp/aL168+J3ly1fVTp14igCqXr3quW3bdsSULl3699BzP/zww28uXLhQauHChS+HdLkHdYoKFSpcGzhw4GedO3eeFlrU8fHxRZq+9PLBufPnNXvuuef2heg3/bvp/ebM/eHdA4cOllqxbEWbRYsXdv95xfKGoY2jRYsWOzp27DijZcuWevFwHH+ZMmWur1y5sm6pUqXOorhToECBW0eOHCkdHR19EzeQ3Llzu3799dfiuBHVrVv39MKFC5umfefcuXO7jBs3buyZM2fyxsXFvTxs2LCZ2M/Fixc3LVeu3DH8d9WqVS+tWLGi/unTp6uMGTNm4vr162umPl8XA0Pc5okDJETcfPnysSpVqhzVa0tTyubNm9c4KirKc+TIoVotW7y+ddyXX/Z68822yHpp57c6bvP5fWHFS5Q8vn7d2jfGT/iym6ZR0rdP358rVqi4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";

/***/ }),

/***/ "./build.definitions/version.mdkbundlerversion":
/*!*****************************************************!*\
  !*** ./build.definitions/version.mdkbundlerversion ***!
  \*****************************************************/
/***/ ((module) => {

"use strict";
module.exports = "1.1\n";

/***/ }),

/***/ "./build.definitions/n4/Styles/Styles.json":
/*!*************************************************!*\
  !*** ./build.definitions/n4/Styles/Styles.json ***!
  \*************************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"ActionBar":{"font-color":"#ffffff","background-color":"#51abf1"},"button1":{"background-color":"#51abf1","font-color":"#ffffff","font-typeface":"bold","font-size":"16px","border-bottom-left-radius":"20px","border-bottom-right-radius":"20px","border-top-right-radius":"20px","border-top-left-radius":"20px"},"header1":{"text-align-last":"center"},"label1":{"text-align":"center"},"MYINFO":{"text-align":"center"},"rbutton1":{"border":["1px solid black","2px solid #007bff"],"font-color":"#f3f7f9","font-size":"26px","padding":"10px 20px","background-color":"#7d9cb5","border-bottom-left-radius":"20px","border-bottom-right-radius":"20px","border-top-right-radius":"20px","border-top-left-radius":"20px"},"NoteFormCellValue":{"background-color":"#cfcfe6","font-color":"black","font-style":"body","font-typeface":"bold","font-size":"24px"},"Form":{"font-color":"black","font-style":"body","font-typeface":"bold","font-size":"26px"},"Formm":{"font-color":"#7575d4","font-style":"bold","font-size":"26px","text-align-last":"center","text-align":"center"},"fr":{"background-color":"#d7d7e9","border-radius":"50%"},"AdditionalTextStyle":{"background-color":"#d7d7e9","font-color":"black","font-size":"20px"},"f":{"text-align-last":"center"},"ff":{"border-radius":"75","border-bottom-left-radius":"20","border-bottom-right-radius":"20","text-align-last":"center","font-size":"8x"},"e":{"text-align-last":"center","font-color":"#7575d4","font-size":"11px"},"t":{"border-radius":"20%"}}');

/***/ }),

/***/ "./build.definitions/n4/jsconfig.json":
/*!********************************************!*\
  !*** ./build.definitions/n4/jsconfig.json ***!
  \********************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"include":["Rules/**/*",".typings/**/*"]}');

/***/ }),

/***/ "./build.definitions/tsconfig.json":
/*!*****************************************!*\
  !*** ./build.definitions/tsconfig.json ***!
  \*****************************************/
/***/ ((module) => {

"use strict";
module.exports = JSON.parse('{"compilerOptions":{"target":"es2015","module":"esnext","moduleResolution":"node","lib":["es2018","dom"],"experimentalDecorators":true,"emitDecoratorMetadata":true,"removeComments":true,"inlineSourceMap":true,"noEmitOnError":false,"noEmitHelpers":true,"baseUrl":".","plugins":[{"transform":"@nativescript/webpack/dist/transformers/NativeClass","type":"raw"}]},"exclude":["node_modules"]}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./build.definitions/application-index.js");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=bundle.js.map