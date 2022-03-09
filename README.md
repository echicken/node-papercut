# node-papercut

This module makes it *slightly* easier to interact with the PaperCut XML
Web Services API via your node.js application, and performs some minimal
validation of parameters for your API calls.

## Updating and Rebuilding

This module takes the dubious approach of scraping the HTML documentation
included with PaperCut NG/MF, then dynamically generating its own methods
and docs based on the result. You can just start using this module without
having to worry about any of that, but it's possible that this module's API
will fall behind as new versions of PaperCut come out.

As a shortcut, you can use **PaperCut.call_api(method, param[, ...])** to call
an arbitrary API method without having to rebuild this module's data.

If you want to rebuild this module's list of methods, copy the file
**server/examples/webservices/java/docs/api/ServerCommandProxy.html** from
your PaperCut NG/MF application server into the root of this module and run
the following commands:

```sh
npm run scrape
```

```sh
npm run docs
```

Occasionally, the format of **ServerCommandProxy.html** will change, and
alterations will need to be made to **scrape-api-docs.js** to accommodate.
Typically when this happens, the generated docs will show no methods.

I'd recommend working on a new branch in your own fork of the repo before
running the above commands or making changes. If your update is successful
and brings this module up to date with the latest version of PaperCut MF,
a pull request would then be welcome. (If you're using PaperCut NG, remind
me to verify that I won't lose any MF-specific features by merging your
branch.)
<a name="PaperCut"></a>

## PaperCut
An interface to the PaperCut XML web services API

**Kind**: global class  

* [PaperCut](#PaperCut)
    * [new PaperCut(host, port, token, path, tls)](#new_PaperCut_new)
    * [.call_api(method, ...param)](#PaperCut+call_api) ⇒ <code>Promise</code>
    * [.addAdminAccessGroup(groupName)](#PaperCut+addAdminAccessGroup) ⇒ <code>Promise</code>
    * [.addAdminAccessUser(userName)](#PaperCut+addAdminAccessUser) ⇒ <code>Promise</code>
    * [.addNewGroup(groupName)](#PaperCut+addNewGroup) ⇒ <code>Promise</code>
    * [.addNewInternalUser(username, password, fullName, email, cardId, pin)](#PaperCut+addNewInternalUser) ⇒ <code>Promise</code>
    * [.addNewSharedAccount(sharedAccountName)](#PaperCut+addNewSharedAccount) ⇒ <code>Promise</code>
    * [.addNewUser(username)](#PaperCut+addNewUser) ⇒ <code>Promise</code>
    * [.addNewUsers()](#PaperCut+addNewUsers) ⇒ <code>Promise</code>
    * [.addPrinterAccessGroup(serverName, printerName, groupName)](#PaperCut+addPrinterAccessGroup) ⇒ <code>Promise</code>
    * [.addPrinterGroup(serverName, printerName, printerGroupName)](#PaperCut+addPrinterGroup) ⇒ <code>Promise</code>
    * [.addSharedAccountAccessGroup(sharedAccountName, groupName)](#PaperCut+addSharedAccountAccessGroup) ⇒ <code>Promise</code>
    * [.addSharedAccountAccessUser(sharedAccountName, userName)](#PaperCut+addSharedAccountAccessUser) ⇒ <code>Promise</code>
    * [.addUserToGroup(userName, groupName)](#PaperCut+addUserToGroup) ⇒ <code>Promise</code>
    * [.adjustSharedAccountAccountBalance(accountName, adjustment, comment)](#PaperCut+adjustSharedAccountAccountBalance) ⇒ <code>Promise</code>
    * [.adjustUserAccountBalance(username, adjustment, comment)](#PaperCut+adjustUserAccountBalance) ⇒ <code>Promise</code>
    * [.adjustUserAccountBalance_2(username, adjustment, comment, accountName)](#PaperCut+adjustUserAccountBalance_2) ⇒ <code>Promise</code>
    * [.adjustUserAccountBalanceByCardNumber(cardNumber, adjustment, comment)](#PaperCut+adjustUserAccountBalanceByCardNumber) ⇒ <code>Promise</code>
    * [.adjustUserAccountBalanceByCardNumber_2(cardNumber, adjustment, comment, accountName)](#PaperCut+adjustUserAccountBalanceByCardNumber_2) ⇒ <code>Promise</code>
    * [.adjustUserAccountBalanceByGroup(group, adjustment, comment)](#PaperCut+adjustUserAccountBalanceByGroup) ⇒ <code>Promise</code>
    * [.adjustUserAccountBalanceByGroup_2(group, adjustment, comment, accountName)](#PaperCut+adjustUserAccountBalanceByGroup_2) ⇒ <code>Promise</code>
    * [.adjustUserAccountBalanceByGroupUpTo(group, adjustment, limit, comment)](#PaperCut+adjustUserAccountBalanceByGroupUpTo) ⇒ <code>Promise</code>
    * [.adjustUserAccountBalanceByGroupUpTo_2(group, adjustment, limit, comment, accountName)](#PaperCut+adjustUserAccountBalanceByGroupUpTo_2) ⇒ <code>Promise</code>
    * [.adjustUserAccountBalanceIfAvailable(username, adjustment, comment)](#PaperCut+adjustUserAccountBalanceIfAvailable) ⇒ <code>Promise</code>
    * [.adjustUserAccountBalanceIfAvailable_2(username, adjustment, comment, accountName)](#PaperCut+adjustUserAccountBalanceIfAvailable_2) ⇒ <code>Promise</code>
    * [.adjustUserAccountBalanceIfAvailableLeaveRemaining(username, adjustment, leaveRemaining, comment)](#PaperCut+adjustUserAccountBalanceIfAvailableLeaveRemaining) ⇒ <code>Promise</code>
    * [.adjustUserAccountBalanceIfAvailableLeaveRemaining_2(username, adjustment, leaveRemaining, comment, accountName)](#PaperCut+adjustUserAccountBalanceIfAvailableLeaveRemaining_2) ⇒ <code>Promise</code>
    * [.applyDeviceSettings(deviceName)](#PaperCut+applyDeviceSettings) ⇒ <code>Promise</code>
    * [.batchImportInternalUsers(importFile, overwriteExistingPasswords, overwriteExistingPINs)](#PaperCut+batchImportInternalUsers) ⇒ <code>Promise</code>
    * [.batchImportPrinters(importFile)](#PaperCut+batchImportPrinters) ⇒ <code>Promise</code>
    * [.batchImportSharedAccounts(importFile, test, deleteNonExistentAccounts)](#PaperCut+batchImportSharedAccounts) ⇒ <code>Promise</code>
    * [.batchImportUserCardIdNumbers(importFile, overwriteExistingPINs)](#PaperCut+batchImportUserCardIdNumbers) ⇒ <code>Promise</code>
    * [.batchImportUsers(importFile, createNewUsers)](#PaperCut+batchImportUsers) ⇒ <code>Promise</code>
    * [.changeInternalAdminPassword(newPassword)](#PaperCut+changeInternalAdminPassword) ⇒ <code>Promise</code>
    * [.clearUserAdvancedPrinterSettings(userName)](#PaperCut+clearUserAdvancedPrinterSettings) ⇒ <code>Promise</code>
    * [.createUserClientAccountsFile()](#PaperCut+createUserClientAccountsFile) ⇒ <code>Promise</code>
    * [.deleteExistingSharedAccount(sharedAccountName)](#PaperCut+deleteExistingSharedAccount) ⇒ <code>Promise</code>
    * [.deleteExistingUser(username)](#PaperCut+deleteExistingUser) ⇒ <code>Promise</code>
    * [.deleteExistingUser_2(username, redactUserData)](#PaperCut+deleteExistingUser_2) ⇒ <code>Promise</code>
    * [.deletePrinter(serverName, printerName)](#PaperCut+deletePrinter) ⇒ <code>Promise</code>
    * [.disableDeviceSnmpv3(deviceName)](#PaperCut+disableDeviceSnmpv3) ⇒ <code>Promise</code>
    * [.disablePrinter(serverName, printerName, disableMins)](#PaperCut+disablePrinter) ⇒ <code>Promise</code>
    * [.disablePrinterSnmpv3(serverName, printerName)](#PaperCut+disablePrinterSnmpv3) ⇒ <code>Promise</code>
    * [.disablePrintingForUser(userName, disableMins)](#PaperCut+disablePrintingForUser) ⇒ <code>Promise</code>
    * [.disableSharedAccount(sharedAccountName, disableMins)](#PaperCut+disableSharedAccount) ⇒ <code>Promise</code>
    * [.enableDeviceSnmpv3(deviceName, context, username, authPass, privPass, authProto, privProto)](#PaperCut+enableDeviceSnmpv3) ⇒ <code>Promise</code>
    * [.enablePrinter(serverName, printerName)](#PaperCut+enablePrinter) ⇒ <code>Promise</code>
    * [.enablePrinterSnmpv3(serverName, printerName, context, username, authPass, privPass, authProto, privProto)](#PaperCut+enablePrinterSnmpv3) ⇒ <code>Promise</code>
    * [.exportUserDataHistory(username, saveLocation)](#PaperCut+exportUserDataHistory) ⇒ <code>Promise</code>
    * [.generateAdHocReport(reportType, dataParams, exportTypeExt, reportTitle, saveLocation)](#PaperCut+generateAdHocReport) ⇒ <code>Promise</code>
    * [.generateScheduledReport(reportTitle, saveLocation)](#PaperCut+generateScheduledReport) ⇒ <code>Promise</code>
    * [.getConfigValue(configName)](#PaperCut+getConfigValue) ⇒ <code>Promise</code>
    * [.getDeviceSnmpv3(deviceName)](#PaperCut+getDeviceSnmpv3) ⇒ <code>Promise</code>
    * [.getGroupMembers(groupName, offset, limit)](#PaperCut+getGroupMembers) ⇒ <code>Promise</code>
    * [.getGroupQuota(groupName)](#PaperCut+getGroupQuota) ⇒ <code>Promise</code>
    * [.getPrinterCostSimple(serverName, printerName)](#PaperCut+getPrinterCostSimple) ⇒ <code>Promise</code>
    * [.getPrinterProperties(authToken, serverName, printerName, propertyNames)](#PaperCut+getPrinterProperties) ⇒ <code>Promise</code>
    * [.getPrinterProperty(serverName, printerName, propertyName)](#PaperCut+getPrinterProperty) ⇒ <code>Promise</code>
    * [.getPrinterSnmpv3(serverName, printerName)](#PaperCut+getPrinterSnmpv3) ⇒ <code>Promise</code>
    * [.getSharedAccountAccountBalance(accountName)](#PaperCut+getSharedAccountAccountBalance) ⇒ <code>Promise</code>
    * [.getSharedAccountOverdraftMode(accountName)](#PaperCut+getSharedAccountOverdraftMode) ⇒ <code>Promise</code>
    * [.getSharedAccountProperties(sharedAccountName, propertyNames)](#PaperCut+getSharedAccountProperties) ⇒ <code>Promise</code>
    * [.getSharedAccountProperty(sharedAccountName, propertyName)](#PaperCut+getSharedAccountProperty) ⇒ <code>Promise</code>
    * [.getTaskStatus()](#PaperCut+getTaskStatus) ⇒ <code>Promise</code>
    * [.getTotalUsers()](#PaperCut+getTotalUsers) ⇒ <code>Promise</code>
    * [.getUserAccountBalance(username)](#PaperCut+getUserAccountBalance) ⇒ <code>Promise</code>
    * [.getUserAccountBalance_2(username, accountName)](#PaperCut+getUserAccountBalance_2) ⇒ <code>Promise</code>
    * [.getUserGroups(userName)](#PaperCut+getUserGroups) ⇒ <code>Promise</code>
    * [.getUserOverdraftMode(username)](#PaperCut+getUserOverdraftMode) ⇒ <code>Promise</code>
    * [.getUserProperties(userName, propertyNames)](#PaperCut+getUserProperties) ⇒ <code>Promise</code>
    * [.getUserProperty(userName, propertyName)](#PaperCut+getUserProperty) ⇒ <code>Promise</code>
    * [.installLicense(licenseFile)](#PaperCut+installLicense) ⇒ <code>Promise</code>
    * [.isGroupExists(groupName)](#PaperCut+isGroupExists) ⇒ <code>Promise</code>
    * [.isSharedAccountExists(accountName)](#PaperCut+isSharedAccountExists) ⇒ <code>Promise</code>
    * [.isUserExists(username)](#PaperCut+isUserExists) ⇒ <code>Promise</code>
    * [.listPrinters(offset, limit)](#PaperCut+listPrinters) ⇒ <code>Promise</code>
    * [.listSharedAccounts(offset, limit)](#PaperCut+listSharedAccounts) ⇒ <code>Promise</code>
    * [.listUserAccounts(offset, limit)](#PaperCut+listUserAccounts) ⇒ <code>Promise</code>
    * [.listUserGroups(offset, limit)](#PaperCut+listUserGroups) ⇒ <code>Promise</code>
    * [.listUserSharedAccounts(userName, offset, limit)](#PaperCut+listUserSharedAccounts) ⇒ <code>Promise</code>
    * [.listUserSharedAccounts_2(userName, offset, limit, ignoreAccountMode)](#PaperCut+listUserSharedAccounts_2) ⇒ <code>Promise</code>
    * [.lookUpUserNameByCardNo(cardNo)](#PaperCut+lookUpUserNameByCardNo) ⇒ <code>Promise</code>
    * [.lookUpUserNameByEmail(email)](#PaperCut+lookUpUserNameByEmail) ⇒ <code>Promise</code>
    * [.lookUpUserNameByIDNo(idNo)](#PaperCut+lookUpUserNameByIDNo) ⇒ <code>Promise</code>
    * [.lookUpUserNameBySecondaryUserName(secondaryUserName)](#PaperCut+lookUpUserNameBySecondaryUserName) ⇒ <code>Promise</code>
    * [.lookUpUsersByFullName(fullName)](#PaperCut+lookUpUsersByFullName) ⇒ <code>Promise</code>
    * [.performGroupSync()](#PaperCut+performGroupSync) ⇒ <code>Promise</code>
    * [.performOnlineBackup()](#PaperCut+performOnlineBackup) ⇒ <code>Promise</code>
    * [.performUserAndGroupSync()](#PaperCut+performUserAndGroupSync) ⇒ <code>Promise</code>
    * [.performUserAndGroupSyncAdvanced(deleteNonExistentUsers, updateUserDetails)](#PaperCut+performUserAndGroupSyncAdvanced) ⇒ <code>Promise</code>
    * [.processJob(jobDetails)](#PaperCut+processJob) ⇒ <code>Promise</code>
    * [.reapplyInitialUserSettings(username)](#PaperCut+reapplyInitialUserSettings) ⇒ <code>Promise</code>
    * [.removeAdminAccessGroup(groupName)](#PaperCut+removeAdminAccessGroup) ⇒ <code>Promise</code>
    * [.removeAdminAccessUser(userName)](#PaperCut+removeAdminAccessUser) ⇒ <code>Promise</code>
    * [.removeGroup(groupName)](#PaperCut+removeGroup) ⇒ <code>Promise</code>
    * [.removePrinterAccessGroup(serverName, printerName, groupName)](#PaperCut+removePrinterAccessGroup) ⇒ <code>Promise</code>
    * [.removeSharedAccountAccessGroup(sharedAccountName, groupName)](#PaperCut+removeSharedAccountAccessGroup) ⇒ <code>Promise</code>
    * [.removeSharedAccountAccessUser(sharedAccountName, userName)](#PaperCut+removeSharedAccountAccessUser) ⇒ <code>Promise</code>
    * [.removeUserFromGroup(userName, groupName)](#PaperCut+removeUserFromGroup) ⇒ <code>Promise</code>
    * [.renamePrinter(serverName, printerName, newServerName, newPrinterName)](#PaperCut+renamePrinter) ⇒ <code>Promise</code>
    * [.renameSharedAccount(currentSharedAccountName, newSharedAccountName)](#PaperCut+renameSharedAccount) ⇒ <code>Promise</code>
    * [.renameUserAccount(currentUserName, newUserName)](#PaperCut+renameUserAccount) ⇒ <code>Promise</code>
    * [.resetPrinterCounts(serverName, printerName, resetBy)](#PaperCut+resetPrinterCounts) ⇒ <code>Promise</code>
    * [.resetUserCounts(username, resetBy)](#PaperCut+resetUserCounts) ⇒ <code>Promise</code>
    * [.runCommand(commandName, args)](#PaperCut+runCommand) ⇒ <code>Promise</code>
    * [.saveThreadSnapshot()](#PaperCut+saveThreadSnapshot) ⇒ <code>Promise</code>
    * [.setConfigValue(configName, configValue)](#PaperCut+setConfigValue) ⇒ <code>Promise</code>
    * [.setGroupQuota(groupName, quotaAmount, period, quotaMaxAccumulation)](#PaperCut+setGroupQuota) ⇒ <code>Promise</code>
    * [.setPrinterCostSimple(serverName, printerName, costPerPage)](#PaperCut+setPrinterCostSimple) ⇒ <code>Promise</code>
    * [.setPrinterGroups(serverName, printerName, printerGroupNames)](#PaperCut+setPrinterGroups) ⇒ <code>Promise</code>
    * [.setPrinterProperties(authToken, serverName, printerName, propertyNamesAndValues)](#PaperCut+setPrinterProperties) ⇒ <code>Promise</code>
    * [.setPrinterProperty(serverName, printerName, propertyName, propertyValue)](#PaperCut+setPrinterProperty) ⇒ <code>Promise</code>
    * [.setSharedAccountAccountBalance(accountName, balance, comment)](#PaperCut+setSharedAccountAccountBalance) ⇒ <code>Promise</code>
    * [.setSharedAccountOverdraftMode(accountName, mode)](#PaperCut+setSharedAccountOverdraftMode) ⇒ <code>Promise</code>
    * [.setSharedAccountProperties(sharedAccountName, propertyNamesAndValues)](#PaperCut+setSharedAccountProperties) ⇒ <code>Promise</code>
    * [.setSharedAccountProperty(sharedAccountName, propertyName, propertyValue)](#PaperCut+setSharedAccountProperty) ⇒ <code>Promise</code>
    * [.setUserAccountBalance(username, balance, comment)](#PaperCut+setUserAccountBalance) ⇒ <code>Promise</code>
    * [.setUserAccountBalance_2(username, balance, comment, accountName)](#PaperCut+setUserAccountBalance_2) ⇒ <code>Promise</code>
    * [.setUserAccountBalanceByGroup(group, balance, comment)](#PaperCut+setUserAccountBalanceByGroup) ⇒ <code>Promise</code>
    * [.setUserAccountBalanceByGroup_2(group, balance, comment, accountName)](#PaperCut+setUserAccountBalanceByGroup_2) ⇒ <code>Promise</code>
    * [.setUserAccountSelectionAdvancedPopup(username, allowPersonal, chargeToPersonalWhenSharedSelected, defaultSharedAccount)](#PaperCut+setUserAccountSelectionAdvancedPopup) ⇒ <code>Promise</code>
    * [.setUserAccountSelectionAutoChargePersonal(username, withPopupConfirmation)](#PaperCut+setUserAccountSelectionAutoChargePersonal) ⇒ <code>Promise</code>
    * [.setUserAccountSelectionAutoSelectSharedAccount(username, accountName, chargeToPersonal)](#PaperCut+setUserAccountSelectionAutoSelectSharedAccount) ⇒ <code>Promise</code>
    * [.setUserAccountSelectionStandardPopup(username, allowPersonal, allowListSelection, allowPinCode, allowPrintingAsOtherUser, chargeToPersonalWhenSharedSelected, defaultSharedAccount)](#PaperCut+setUserAccountSelectionStandardPopup) ⇒ <code>Promise</code>
    * [.setUserOverdraftMode(username, mode)](#PaperCut+setUserOverdraftMode) ⇒ <code>Promise</code>
    * [.setUserProperties(userName, propertyNamesAndValues)](#PaperCut+setUserProperties) ⇒ <code>Promise</code>
    * [.setUserProperty(userName, propertyName, propertyValue)](#PaperCut+setUserProperty) ⇒ <code>Promise</code>
    * [.syncGroup(groupName)](#PaperCut+syncGroup) ⇒ <code>Promise</code>
    * [.useCard(userName, cardNumber)](#PaperCut+useCard) ⇒ <code>Promise</code>

<a name="new_PaperCut_new"></a>

### new PaperCut(host, port, token, path, tls)
Create an instance


| Param | Type | Default | Description |
| --- | --- | --- | --- |
| host | <code>string</code> |  | The PaperCut server's FQDN |
| port | <code>number</code> |  | Connect to this port number |
| token | <code>string</code> |  | Your API token |
| path | <code>string</code> | <code>&quot;/rpc/api/xmlrpc&quot;</code> | The path to the XML web service |
| tls | <code>boolean</code> | <code>true</code> | Use SSL/TLS |

<a name="PaperCut+call_api"></a>

### paperCut.call\_api(method, ...param) ⇒ <code>Promise</code>
Call an arbitrary method on the API

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with API response or rejects with error  

| Param | Type | Description |
| --- | --- | --- |
| method | <code>string</code> | Method name, eg. 'getUserAccountBalance' |
| ...param | <code>string</code> \| <code>number</code> \| <code>boolean</code> | Parameter(s) for the method call |

<a name="PaperCut+addAdminAccessGroup"></a>

### paperCut.addAdminAccessGroup(groupName) ⇒ <code>Promise</code>
Adds a group as an admin group with the default admin rights.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with undefined, rejects on error  

| Param | Type |
| --- | --- |
| groupName | <code>string</code> | 

<a name="PaperCut+addAdminAccessUser"></a>

### paperCut.addAdminAccessUser(userName) ⇒ <code>Promise</code>
Adds a user as administrator with the default admin rights.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with undefined, rejects on error  

| Param | Type |
| --- | --- |
| userName | <code>string</code> | 

<a name="PaperCut+addNewGroup"></a>

### paperCut.addNewGroup(groupName) ⇒ <code>Promise</code>
Add a new group to system's group list.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with undefined, rejects on error  

| Param | Type |
| --- | --- |
| groupName | <code>string</code> | 

<a name="PaperCut+addNewInternalUser"></a>

### paperCut.addNewInternalUser(username, password, fullName, email, cardId, pin) ⇒ <code>Promise</code>
Creates and sets up a new internal user account.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with undefined, rejects on error  

| Param | Type |
| --- | --- |
| username | <code>string</code> | 
| password | <code>string</code> | 
| fullName | <code>string</code> | 
| email | <code>string</code> | 
| cardId | <code>string</code> | 
| pin | <code>string</code> | 

<a name="PaperCut+addNewSharedAccount"></a>

### paperCut.addNewSharedAccount(sharedAccountName) ⇒ <code>Promise</code>
Create a new shared account with the given name.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with undefined, rejects on error  

| Param | Type |
| --- | --- |
| sharedAccountName | <code>string</code> | 

<a name="PaperCut+addNewUser"></a>

### paperCut.addNewUser(username) ⇒ <code>Promise</code>
Trigger the process of adding a new user account.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with undefined, rejects on error  

| Param | Type |
| --- | --- |
| username | <code>string</code> | 

<a name="PaperCut+addNewUsers"></a>

### paperCut.addNewUsers() ⇒ <code>Promise</code>
Calling this method will start a specialized user and group synchronization process optimized for tracking down
 adding any new users that exist in the OS/Network/Domain user directory and not in the system.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with undefined, rejects on error  
<a name="PaperCut+addPrinterAccessGroup"></a>

### paperCut.addPrinterAccessGroup(serverName, printerName, groupName) ⇒ <code>Promise</code>
Adds the group to the printer access group list.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with undefined, rejects on error  

| Param | Type |
| --- | --- |
| serverName | <code>string</code> | 
| printerName | <code>string</code> | 
| groupName | <code>string</code> | 

<a name="PaperCut+addPrinterGroup"></a>

### paperCut.addPrinterGroup(serverName, printerName, printerGroupName) ⇒ <code>Promise</code>
Add a printer to a single printer group.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with undefined, rejects on error  

| Param | Type |
| --- | --- |
| serverName | <code>string</code> | 
| printerName | <code>string</code> | 
| printerGroupName | <code>string</code> | 

<a name="PaperCut+addSharedAccountAccessGroup"></a>

### paperCut.addSharedAccountAccessGroup(sharedAccountName, groupName) ⇒ <code>Promise</code>
Allow the given group access to the given shared account without using a pin.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with undefined, rejects on error  

| Param | Type |
| --- | --- |
| sharedAccountName | <code>string</code> | 
| groupName | <code>string</code> | 

<a name="PaperCut+addSharedAccountAccessUser"></a>

### paperCut.addSharedAccountAccessUser(sharedAccountName, userName) ⇒ <code>Promise</code>
Allow the given user access to the given shared account without using a pin.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with undefined, rejects on error  

| Param | Type |
| --- | --- |
| sharedAccountName | <code>string</code> | 
| userName | <code>string</code> | 

<a name="PaperCut+addUserToGroup"></a>

### paperCut.addUserToGroup(userName, groupName) ⇒ <code>Promise</code>
Adds the user to the specified group.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with undefined, rejects on error  

| Param | Type |
| --- | --- |
| userName | <code>string</code> | 
| groupName | <code>string</code> | 

<a name="PaperCut+adjustSharedAccountAccountBalance"></a>

### paperCut.adjustSharedAccountAccountBalance(accountName, adjustment, comment) ⇒ <code>Promise</code>
Adjust a shared account's account balance by an adjustment amount.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with undefined, rejects on error  

| Param | Type |
| --- | --- |
| accountName | <code>string</code> | 
| adjustment | <code>double</code> | 
| comment | <code>string</code> | 

<a name="PaperCut+adjustUserAccountBalance"></a>

### paperCut.adjustUserAccountBalance(username, adjustment, comment) ⇒ <code>Promise</code>
Adjust a user's built-in/default account balance by an adjustment amount.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with undefined, rejects on error  

| Param | Type |
| --- | --- |
| username | <code>string</code> | 
| adjustment | <code>double</code> | 
| comment | <code>string</code> | 

<a name="PaperCut+adjustUserAccountBalance_2"></a>

### paperCut.adjustUserAccountBalance\_2(username, adjustment, comment, accountName) ⇒ <code>Promise</code>
Adjust a user's account balance by an adjustment amount.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with undefined, rejects on error  

| Param | Type |
| --- | --- |
| username | <code>string</code> | 
| adjustment | <code>double</code> | 
| comment | <code>string</code> | 
| accountName | <code>string</code> | 

<a name="PaperCut+adjustUserAccountBalanceByCardNumber"></a>

### paperCut.adjustUserAccountBalanceByCardNumber(cardNumber, adjustment, comment) ⇒ <code>Promise</code>
Adjust a user's account balance.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with boolean, rejects on error  

| Param | Type |
| --- | --- |
| cardNumber | <code>string</code> | 
| adjustment | <code>double</code> | 
| comment | <code>string</code> | 

<a name="PaperCut+adjustUserAccountBalanceByCardNumber_2"></a>

### paperCut.adjustUserAccountBalanceByCardNumber\_2(cardNumber, adjustment, comment, accountName) ⇒ <code>Promise</code>
Adjust a user's account balance.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with boolean, rejects on error  

| Param | Type |
| --- | --- |
| cardNumber | <code>string</code> | 
| adjustment | <code>double</code> | 
| comment | <code>string</code> | 
| accountName | <code>string</code> | 

<a name="PaperCut+adjustUserAccountBalanceByGroup"></a>

### paperCut.adjustUserAccountBalanceByGroup(group, adjustment, comment) ⇒ <code>Promise</code>
Adjust the account balance of all users in a group by an adjustment amount.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with undefined, rejects on error  

| Param | Type |
| --- | --- |
| group | <code>string</code> | 
| adjustment | <code>double</code> | 
| comment | <code>string</code> | 

<a name="PaperCut+adjustUserAccountBalanceByGroup_2"></a>

### paperCut.adjustUserAccountBalanceByGroup\_2(group, adjustment, comment, accountName) ⇒ <code>Promise</code>
Adjust the account balance of all users in a group by an adjustment amount.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with undefined, rejects on error  

| Param | Type |
| --- | --- |
| group | <code>string</code> | 
| adjustment | <code>double</code> | 
| comment | <code>string</code> | 
| accountName | <code>string</code> | 

<a name="PaperCut+adjustUserAccountBalanceByGroupUpTo"></a>

### paperCut.adjustUserAccountBalanceByGroupUpTo(group, adjustment, limit, comment) ⇒ <code>Promise</code>
Adjust the account balance of all users in a group by an adjustment amount.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with undefined, rejects on error  

| Param | Type |
| --- | --- |
| group | <code>string</code> | 
| adjustment | <code>double</code> | 
| limit | <code>double</code> | 
| comment | <code>string</code> | 

<a name="PaperCut+adjustUserAccountBalanceByGroupUpTo_2"></a>

### paperCut.adjustUserAccountBalanceByGroupUpTo\_2(group, adjustment, limit, comment, accountName) ⇒ <code>Promise</code>
Adjust the account balance of all users in a group by an adjustment amount.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with undefined, rejects on error  

| Param | Type |
| --- | --- |
| group | <code>string</code> | 
| adjustment | <code>double</code> | 
| limit | <code>double</code> | 
| comment | <code>string</code> | 
| accountName | <code>string</code> | 

<a name="PaperCut+adjustUserAccountBalanceIfAvailable"></a>

### paperCut.adjustUserAccountBalanceIfAvailable(username, adjustment, comment) ⇒ <code>Promise</code>
Adjust a user's account balance by an adjustment amount (if there is credit available).

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with boolean, rejects on error  

| Param | Type |
| --- | --- |
| username | <code>string</code> | 
| adjustment | <code>double</code> | 
| comment | <code>string</code> | 

<a name="PaperCut+adjustUserAccountBalanceIfAvailable_2"></a>

### paperCut.adjustUserAccountBalanceIfAvailable\_2(username, adjustment, comment, accountName) ⇒ <code>Promise</code>
Adjust a user's account balance by an adjustment amount (if there is credit available).

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with boolean, rejects on error  

| Param | Type |
| --- | --- |
| username | <code>string</code> | 
| adjustment | <code>double</code> | 
| comment | <code>string</code> | 
| accountName | <code>string</code> | 

<a name="PaperCut+adjustUserAccountBalanceIfAvailableLeaveRemaining"></a>

### paperCut.adjustUserAccountBalanceIfAvailableLeaveRemaining(username, adjustment, leaveRemaining, comment) ⇒ <code>Promise</code>
Adjust a user's account balance by an adjustment amount (if there is credit available to leave the specified
 amount still available in the account).

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with boolean, rejects on error  

| Param | Type |
| --- | --- |
| username | <code>string</code> | 
| adjustment | <code>double</code> | 
| leaveRemaining | <code>double</code> | 
| comment | <code>string</code> | 

<a name="PaperCut+adjustUserAccountBalanceIfAvailableLeaveRemaining_2"></a>

### paperCut.adjustUserAccountBalanceIfAvailableLeaveRemaining\_2(username, adjustment, leaveRemaining, comment, accountName) ⇒ <code>Promise</code>
Adjust a user's account balance by an adjustment amount (if there is credit available to leave the specified
 amount still available in the account).

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with boolean, rejects on error  

| Param | Type |
| --- | --- |
| username | <code>string</code> | 
| adjustment | <code>double</code> | 
| leaveRemaining | <code>double</code> | 
| comment | <code>string</code> | 
| accountName | <code>string</code> | 

<a name="PaperCut+applyDeviceSettings"></a>

### paperCut.applyDeviceSettings(deviceName) ⇒ <code>Promise</code>
Initiates an update to the device of any outstanding configuration changes
 applied via the set-printer-property or set-printer-properties commands

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with undefined, rejects on error  

| Param | Type |
| --- | --- |
| deviceName | <code>string</code> | 

<a name="PaperCut+batchImportInternalUsers"></a>

### paperCut.batchImportInternalUsers(importFile, overwriteExistingPasswords, overwriteExistingPINs) ⇒ <code>Promise</code>
Import the internal users contained in the given tab-delimited import file.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with undefined, rejects on error  

| Param | Type |
| --- | --- |
| importFile | <code>string</code> | 
| overwriteExistingPasswords | <code>boolean</code> | 
| overwriteExistingPINs | <code>boolean</code> | 

<a name="PaperCut+batchImportPrinters"></a>

### paperCut.batchImportPrinters(importFile) ⇒ <code>Promise</code>
Updates printers based on the details contained in the given tab-delimited import file, creating them if
 required.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with undefined, rejects on error  

| Param | Type |
| --- | --- |
| importFile | <code>string</code> | 

<a name="PaperCut+batchImportSharedAccounts"></a>

### paperCut.batchImportSharedAccounts(importFile, test, deleteNonExistentAccounts) ⇒ <code>Promise</code>
Import the shared accounts contained in the given tab-delimited import file.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with string, rejects on error  

| Param | Type |
| --- | --- |
| importFile | <code>string</code> | 
| test | <code>boolean</code> | 
| deleteNonExistentAccounts | <code>boolean</code> | 

<a name="PaperCut+batchImportUserCardIdNumbers"></a>

### paperCut.batchImportUserCardIdNumbers(importFile, overwriteExistingPINs) ⇒ <code>Promise</code>
Import the user card/ID numbers and PINs contained in the given tab-delimited import file.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with undefined, rejects on error  

| Param | Type |
| --- | --- |
| importFile | <code>string</code> | 
| overwriteExistingPINs | <code>boolean</code> | 

<a name="PaperCut+batchImportUsers"></a>

### paperCut.batchImportUsers(importFile, createNewUsers) ⇒ <code>Promise</code>
Import the user details contained in the given tab-delimited import file.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with undefined, rejects on error  

| Param | Type |
| --- | --- |
| importFile | <code>string</code> | 
| createNewUsers | <code>boolean</code> | 

<a name="PaperCut+changeInternalAdminPassword"></a>

### paperCut.changeInternalAdminPassword(newPassword) ⇒ <code>Promise</code>
Change the internal admin password.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with boolean, rejects on error  

| Param | Type |
| --- | --- |
| newPassword | <code>string</code> | 

<a name="PaperCut+clearUserAdvancedPrinterSettings"></a>

### paperCut.clearUserAdvancedPrinterSettings(userName) ⇒ <code>Promise</code>
Clear the User's Advanced Printer Settings, settings cleared are: dont-hold-jobs-in-release-station,
 dont-apply-printer-filter-rules, printer-cost-adjustment-rate-percent, dont-archive, auto-release-jobs

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with undefined, rejects on error  

| Param | Type |
| --- | --- |
| userName | <code>string</code> | 

<a name="PaperCut+createUserClientAccountsFile"></a>

### paperCut.createUserClientAccountsFile() ⇒ <code>Promise</code>
Requests that the server create the client accounts to a file.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with boolean, rejects on error  
<a name="PaperCut+deleteExistingSharedAccount"></a>

### paperCut.deleteExistingSharedAccount(sharedAccountName) ⇒ <code>Promise</code>
Delete a shared account from the system.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with undefined, rejects on error  

| Param | Type |
| --- | --- |
| sharedAccountName | <code>string</code> | 

<a name="PaperCut+deleteExistingUser"></a>

### paperCut.deleteExistingUser(username) ⇒ <code>Promise</code>
Delete/remove an existing user from the user list.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with undefined, rejects on error  

| Param | Type |
| --- | --- |
| username | <code>string</code> | 

<a name="PaperCut+deleteExistingUser_2"></a>

### paperCut.deleteExistingUser\_2(username, redactUserData) ⇒ <code>Promise</code>
Delete/remove an existing user from the user list.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with undefined, rejects on error  

| Param | Type |
| --- | --- |
| username | <code>string</code> | 
| redactUserData | <code>boolean</code> | 

<a name="PaperCut+deletePrinter"></a>

### paperCut.deletePrinter(serverName, printerName) ⇒ <code>Promise</code>
Delete a printer.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with undefined, rejects on error  

| Param | Type |
| --- | --- |
| serverName | <code>string</code> | 
| printerName | <code>string</code> | 

<a name="PaperCut+disableDeviceSnmpv3"></a>

### paperCut.disableDeviceSnmpv3(deviceName) ⇒ <code>Promise</code>
Disable use of SNMPv3 on the device

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with undefined, rejects on error  

| Param | Type |
| --- | --- |
| deviceName | <code>string</code> | 

<a name="PaperCut+disablePrinter"></a>

### paperCut.disablePrinter(serverName, printerName, disableMins) ⇒ <code>Promise</code>
Disable a printer for select period of time.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with undefined, rejects on error  

| Param | Type |
| --- | --- |
| serverName | <code>string</code> | 
| printerName | <code>string</code> | 
| disableMins | <code>int</code> | 

<a name="PaperCut+disablePrinterSnmpv3"></a>

### paperCut.disablePrinterSnmpv3(serverName, printerName) ⇒ <code>Promise</code>
Disable use of SNMPv3 on the printer

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with undefined, rejects on error  

| Param | Type |
| --- | --- |
| serverName | <code>string</code> | 
| printerName | <code>string</code> | 

<a name="PaperCut+disablePrintingForUser"></a>

### paperCut.disablePrintingForUser(userName, disableMins) ⇒ <code>Promise</code>
Disable printing for a user.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with undefined, rejects on error  

| Param | Type |
| --- | --- |
| userName | <code>string</code> | 
| disableMins | <code>int</code> | 

<a name="PaperCut+disableSharedAccount"></a>

### paperCut.disableSharedAccount(sharedAccountName, disableMins) ⇒ <code>Promise</code>
Disable shared account.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with undefined, rejects on error  

| Param | Type |
| --- | --- |
| sharedAccountName | <code>string</code> | 
| disableMins | <code>int</code> | 

<a name="PaperCut+enableDeviceSnmpv3"></a>

### paperCut.enableDeviceSnmpv3(deviceName, context, username, authPass, privPass, authProto, privProto) ⇒ <code>Promise</code>
Set the SNMPv3 device config details

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with undefined, rejects on error  

| Param | Type |
| --- | --- |
| deviceName | <code>string</code> | 
| context | <code>string</code> | 
| username | <code>string</code> | 
| authPass | <code>string</code> | 
| privPass | <code>string</code> | 
| authProto | <code>string</code> | 
| privProto | <code>string</code> | 

<a name="PaperCut+enablePrinter"></a>

### paperCut.enablePrinter(serverName, printerName) ⇒ <code>Promise</code>
Enable a printer.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with undefined, rejects on error  

| Param | Type |
| --- | --- |
| serverName | <code>string</code> | 
| printerName | <code>string</code> | 

<a name="PaperCut+enablePrinterSnmpv3"></a>

### paperCut.enablePrinterSnmpv3(serverName, printerName, context, username, authPass, privPass, authProto, privProto) ⇒ <code>Promise</code>
Set the SNMPv3 printer config details

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with undefined, rejects on error  

| Param | Type |
| --- | --- |
| serverName | <code>string</code> | 
| printerName | <code>string</code> | 
| context | <code>string</code> | 
| username | <code>string</code> | 
| authPass | <code>string</code> | 
| privPass | <code>string</code> | 
| authProto | <code>string</code> | 
| privProto | <code>string</code> | 

<a name="PaperCut+exportUserDataHistory"></a>

### paperCut.exportUserDataHistory(username, saveLocation) ⇒ <code>Promise</code>
Export user data based on a set of predefined CSV reports (The owner of these files will be the system account
 running the PaperCut process).

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with undefined, rejects on error  

| Param | Type |
| --- | --- |
| username | <code>string</code> | 
| saveLocation | <code>string</code> | 

<a name="PaperCut+generateAdHocReport"></a>

### paperCut.generateAdHocReport(reportType, dataParams, exportTypeExt, reportTitle, saveLocation) ⇒ <code>Promise</code>
Generates an AdHoc report

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with boolean, rejects on error  

| Param | Type |
| --- | --- |
| reportType | <code>string</code> | 
| dataParams | <code>string</code> | 
| exportTypeExt | <code>string</code> | 
| reportTitle | <code>string</code> | 
| saveLocation | <code>string</code> | 

<a name="PaperCut+generateScheduledReport"></a>

### paperCut.generateScheduledReport(reportTitle, saveLocation) ⇒ <code>Promise</code>
Generate a specified scheduled report

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with undefined, rejects on error  

| Param | Type |
| --- | --- |
| reportTitle | <code>string</code> | 
| saveLocation | <code>string</code> | 

<a name="PaperCut+getConfigValue"></a>

### paperCut.getConfigValue(configName) ⇒ <code>Promise</code>
Get the config value from the server.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with string, rejects on error  

| Param | Type |
| --- | --- |
| configName | <code>string</code> | 

<a name="PaperCut+getDeviceSnmpv3"></a>

### paperCut.getDeviceSnmpv3(deviceName) ⇒ <code>Promise</code>
Get the SNMPv3 device config details

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with string, rejects on error  

| Param | Type |
| --- | --- |
| deviceName | <code>string</code> | 

<a name="PaperCut+getGroupMembers"></a>

### paperCut.getGroupMembers(groupName, offset, limit) ⇒ <code>Promise</code>
Retrieves a list of all users in the group.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with array, rejects on error  

| Param | Type |
| --- | --- |
| groupName | <code>string</code> | 
| offset | <code>int</code> | 
| limit | <code>int</code> | 

<a name="PaperCut+getGroupQuota"></a>

### paperCut.getGroupQuota(groupName) ⇒ <code>Promise</code>
Get the group quota allocation settings on a given group.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with java.util.Hashtable<java.lang.String,​java.lang.Object>, rejects on error  

| Param | Type |
| --- | --- |
| groupName | <code>string</code> | 

<a name="PaperCut+getPrinterCostSimple"></a>

### paperCut.getPrinterCostSimple(serverName, printerName) ⇒ <code>Promise</code>
Get the page cost if, and only if, the printer is using the Simple Charging Model.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with double, rejects on error  

| Param | Type |
| --- | --- |
| serverName | <code>string</code> | 
| printerName | <code>string</code> | 

<a name="PaperCut+getPrinterProperties"></a>

### paperCut.getPrinterProperties(authToken, serverName, printerName, propertyNames) ⇒ <code>Promise</code>
Get multiple printer properties at once (to save multiple calls).

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with array, rejects on error  

| Param | Type |
| --- | --- |
| authToken | <code>string</code> | 
| serverName | <code>string</code> | 
| printerName | <code>string</code> | 
| propertyNames | <code>array</code> | 

<a name="PaperCut+getPrinterProperty"></a>

### paperCut.getPrinterProperty(serverName, printerName, propertyName) ⇒ <code>Promise</code>
Gets a printer property.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with string, rejects on error  

| Param | Type |
| --- | --- |
| serverName | <code>string</code> | 
| printerName | <code>string</code> | 
| propertyName | <code>string</code> | 

<a name="PaperCut+getPrinterSnmpv3"></a>

### paperCut.getPrinterSnmpv3(serverName, printerName) ⇒ <code>Promise</code>
Get the SNMPv3 printer config details

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with string, rejects on error  

| Param | Type |
| --- | --- |
| serverName | <code>string</code> | 
| printerName | <code>string</code> | 

<a name="PaperCut+getSharedAccountAccountBalance"></a>

### paperCut.getSharedAccountAccountBalance(accountName) ⇒ <code>Promise</code>
The current account balance associated with a shared account.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with double, rejects on error  

| Param | Type |
| --- | --- |
| accountName | <code>string</code> | 

<a name="PaperCut+getSharedAccountOverdraftMode"></a>

### paperCut.getSharedAccountOverdraftMode(accountName) ⇒ <code>Promise</code>
Get the shared account's overdraft mode

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with string, rejects on error  

| Param | Type |
| --- | --- |
| accountName | <code>string</code> | 

<a name="PaperCut+getSharedAccountProperties"></a>

### paperCut.getSharedAccountProperties(sharedAccountName, propertyNames) ⇒ <code>Promise</code>
Get multiple shared account properties at once (to save multiple calls).

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with array, rejects on error  

| Param | Type |
| --- | --- |
| sharedAccountName | <code>string</code> | 
| propertyNames | <code>array</code> | 

<a name="PaperCut+getSharedAccountProperty"></a>

### paperCut.getSharedAccountProperty(sharedAccountName, propertyName) ⇒ <code>Promise</code>
Gets a shared account property.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with string, rejects on error  

| Param | Type |
| --- | --- |
| sharedAccountName | <code>string</code> | 
| propertyName | <code>string</code> | 

<a name="PaperCut+getTaskStatus"></a>

### paperCut.getTaskStatus() ⇒ <code>Promise</code>
Return the status (completed flag and any status message text) associated with a long running task such as
 a sync operation started by the performGroupSync API.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with object, rejects on error  
<a name="PaperCut+getTotalUsers"></a>

### paperCut.getTotalUsers() ⇒ <code>Promise</code>
Get the count of all users in the system.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with int, rejects on error  
<a name="PaperCut+getUserAccountBalance"></a>

### paperCut.getUserAccountBalance(username) ⇒ <code>Promise</code>
The a user's current account balance.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with double, rejects on error  

| Param | Type |
| --- | --- |
| username | <code>string</code> | 

<a name="PaperCut+getUserAccountBalance_2"></a>

### paperCut.getUserAccountBalance\_2(username, accountName) ⇒ <code>Promise</code>
The a user's current account balance.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with double, rejects on error  

| Param | Type |
| --- | --- |
| username | <code>string</code> | 
| accountName | <code>string</code> | 

<a name="PaperCut+getUserGroups"></a>

### paperCut.getUserGroups(userName) ⇒ <code>Promise</code>
Retrieves a list of a user's group memberships.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with array, rejects on error  

| Param | Type |
| --- | --- |
| userName | <code>string</code> | 

<a name="PaperCut+getUserOverdraftMode"></a>

### paperCut.getUserOverdraftMode(username) ⇒ <code>Promise</code>
Get the user's overdraft mode

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with string, rejects on error  

| Param | Type |
| --- | --- |
| username | <code>string</code> | 

<a name="PaperCut+getUserProperties"></a>

### paperCut.getUserProperties(userName, propertyNames) ⇒ <code>Promise</code>
Get multiple user properties at once (to save multiple calls).

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with array, rejects on error  

| Param | Type |
| --- | --- |
| userName | <code>string</code> | 
| propertyNames | <code>array</code> | 

<a name="PaperCut+getUserProperty"></a>

### paperCut.getUserProperty(userName, propertyName) ⇒ <code>Promise</code>
Gets a user property.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with string, rejects on error  

| Param | Type |
| --- | --- |
| userName | <code>string</code> | 
| propertyName | <code>string</code> | 

<a name="PaperCut+installLicense"></a>

### paperCut.installLicense(licenseFile) ⇒ <code>Promise</code>
Install a new license

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with undefined, rejects on error  

| Param | Type |
| --- | --- |
| licenseFile | <code>string</code> | 

<a name="PaperCut+isGroupExists"></a>

### paperCut.isGroupExists(groupName) ⇒ <code>Promise</code>
Checks if group exists or not.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with boolean, rejects on error  

| Param | Type |
| --- | --- |
| groupName | <code>string</code> | 

<a name="PaperCut+isSharedAccountExists"></a>

### paperCut.isSharedAccountExists(accountName) ⇒ <code>Promise</code>
Test to see if a shared account exists.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with boolean, rejects on error  

| Param | Type |
| --- | --- |
| accountName | <code>string</code> | 

<a name="PaperCut+isUserExists"></a>

### paperCut.isUserExists(username) ⇒ <code>Promise</code>
Test to see if a user associated with "username" exists in the system.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with boolean, rejects on error  

| Param | Type |
| --- | --- |
| username | <code>string</code> | 

<a name="PaperCut+listPrinters"></a>

### paperCut.listPrinters(offset, limit) ⇒ <code>Promise</code>
List all printers sorted by printer name.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with array, rejects on error  

| Param | Type |
| --- | --- |
| offset | <code>int</code> | 
| limit | <code>int</code> | 

<a name="PaperCut+listSharedAccounts"></a>

### paperCut.listSharedAccounts(offset, limit) ⇒ <code>Promise</code>
List all shared accounts (sorted by account name) starting at offset and ending at limit.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with array, rejects on error  

| Param | Type |
| --- | --- |
| offset | <code>int</code> | 
| limit | <code>int</code> | 

<a name="PaperCut+listUserAccounts"></a>

### paperCut.listUserAccounts(offset, limit) ⇒ <code>Promise</code>
List all user accounts (sorted by username) starting at offset and ending at limit.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with array, rejects on error  

| Param | Type |
| --- | --- |
| offset | <code>int</code> | 
| limit | <code>int</code> | 

<a name="PaperCut+listUserGroups"></a>

### paperCut.listUserGroups(offset, limit) ⇒ <code>Promise</code>
List user groups.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with array, rejects on error  

| Param | Type |
| --- | --- |
| offset | <code>int</code> | 
| limit | <code>int</code> | 

<a name="PaperCut+listUserSharedAccounts"></a>

### paperCut.listUserSharedAccounts(userName, offset, limit) ⇒ <code>Promise</code>
List all shared accounts (sorted by account name) that the user has access to, starting at offset
 and listing only limit accounts.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with array, rejects on error  

| Param | Type |
| --- | --- |
| userName | <code>string</code> | 
| offset | <code>int</code> | 
| limit | <code>int</code> | 

<a name="PaperCut+listUserSharedAccounts_2"></a>

### paperCut.listUserSharedAccounts\_2(userName, offset, limit, ignoreAccountMode) ⇒ <code>Promise</code>
List all shared accounts (sorted by account name) that the user has access to, starting at offset
 and listing only limit accounts.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with array, rejects on error  

| Param | Type |
| --- | --- |
| userName | <code>string</code> | 
| offset | <code>int</code> | 
| limit | <code>int</code> | 
| ignoreAccountMode | <code>boolean</code> | 

<a name="PaperCut+lookUpUserNameByCardNo"></a>

### paperCut.lookUpUserNameByCardNo(cardNo) ⇒ <code>Promise</code>
Looks up the user with the given user card number and returns their user name.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with string, rejects on error  

| Param | Type |
| --- | --- |
| cardNo | <code>string</code> | 

<a name="PaperCut+lookUpUserNameByEmail"></a>

### paperCut.lookUpUserNameByEmail(email) ⇒ <code>Promise</code>
Looks up the user with the given email and returns their user name.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with string, rejects on error  

| Param | Type |
| --- | --- |
| email | <code>string</code> | 

<a name="PaperCut+lookUpUserNameByIDNo"></a>

### paperCut.lookUpUserNameByIDNo(idNo) ⇒ <code>Promise</code>
Looks up the user with the given user id number and returns their user name.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with string, rejects on error  

| Param | Type |
| --- | --- |
| idNo | <code>string</code> | 

<a name="PaperCut+lookUpUserNameBySecondaryUserName"></a>

### paperCut.lookUpUserNameBySecondaryUserName(secondaryUserName) ⇒ <code>Promise</code>
Looks up the user with the specified secondary user name and returns their  primary user name.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with string, rejects on error  

| Param | Type |
| --- | --- |
| secondaryUserName | <code>string</code> | 

<a name="PaperCut+lookUpUsersByFullName"></a>

### paperCut.lookUpUsersByFullName(fullName) ⇒ <code>Promise</code>
Looks up the users with the given full name and returns their user names.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with array, rejects on error  

| Param | Type |
| --- | --- |
| fullName | <code>string</code> | 

<a name="PaperCut+performGroupSync"></a>

### paperCut.performGroupSync() ⇒ <code>Promise</code>
Start the process of synchronizing the system's group membership with the OS/Network/Domain's group membership.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with undefined, rejects on error  
<a name="PaperCut+performOnlineBackup"></a>

### paperCut.performOnlineBackup() ⇒ <code>Promise</code>
Instigate an online backup.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with undefined, rejects on error  
<a name="PaperCut+performUserAndGroupSync"></a>

### paperCut.performUserAndGroupSync() ⇒ <code>Promise</code>
Start a full user and group synchronization.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with undefined, rejects on error  
<a name="PaperCut+performUserAndGroupSyncAdvanced"></a>

### paperCut.performUserAndGroupSyncAdvanced(deleteNonExistentUsers, updateUserDetails) ⇒ <code>Promise</code>
An advanced version of the user and group synchronization process providing control over the sync behaviour.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with undefined, rejects on error  

| Param | Type |
| --- | --- |
| deleteNonExistentUsers | <code>boolean</code> | 
| updateUserDetails | <code>boolean</code> | 

<a name="PaperCut+processJob"></a>

### paperCut.processJob(jobDetails) ⇒ <code>Promise</code>
Takes the details of a job and logs and charges as if it were a "real" job.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with undefined, rejects on error  

| Param | Type |
| --- | --- |
| jobDetails | <code>string</code> | 

<a name="PaperCut+reapplyInitialUserSettings"></a>

### paperCut.reapplyInitialUserSettings(username) ⇒ <code>Promise</code>
Re-applies initial user settings on the given user.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with undefined, rejects on error  

| Param | Type |
| --- | --- |
| username | <code>string</code> | 

<a name="PaperCut+removeAdminAccessGroup"></a>

### paperCut.removeAdminAccessGroup(groupName) ⇒ <code>Promise</code>
Removes a group from the list of admin groups.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with undefined, rejects on error  

| Param | Type |
| --- | --- |
| groupName | <code>string</code> | 

<a name="PaperCut+removeAdminAccessUser"></a>

### paperCut.removeAdminAccessUser(userName) ⇒ <code>Promise</code>
Removes an admin user from the list of admins.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with undefined, rejects on error  

| Param | Type |
| --- | --- |
| userName | <code>string</code> | 

<a name="PaperCut+removeGroup"></a>

### paperCut.removeGroup(groupName) ⇒ <code>Promise</code>
Removes an  already existing group.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with undefined, rejects on error  

| Param | Type |
| --- | --- |
| groupName | <code>string</code> | 

<a name="PaperCut+removePrinterAccessGroup"></a>

### paperCut.removePrinterAccessGroup(serverName, printerName, groupName) ⇒ <code>Promise</code>
Removes the group from the printer access group list.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with undefined, rejects on error  

| Param | Type |
| --- | --- |
| serverName | <code>string</code> | 
| printerName | <code>string</code> | 
| groupName | <code>string</code> | 

<a name="PaperCut+removeSharedAccountAccessGroup"></a>

### paperCut.removeSharedAccountAccessGroup(sharedAccountName, groupName) ⇒ <code>Promise</code>
Revoke the given group's access to the given shared account.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with undefined, rejects on error  

| Param | Type |
| --- | --- |
| sharedAccountName | <code>string</code> | 
| groupName | <code>string</code> | 

<a name="PaperCut+removeSharedAccountAccessUser"></a>

### paperCut.removeSharedAccountAccessUser(sharedAccountName, userName) ⇒ <code>Promise</code>
Revoke the given user's access to the given shared account.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with undefined, rejects on error  

| Param | Type |
| --- | --- |
| sharedAccountName | <code>string</code> | 
| userName | <code>string</code> | 

<a name="PaperCut+removeUserFromGroup"></a>

### paperCut.removeUserFromGroup(userName, groupName) ⇒ <code>Promise</code>
Removes the user from the specified group.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with undefined, rejects on error  

| Param | Type |
| --- | --- |
| userName | <code>string</code> | 
| groupName | <code>string</code> | 

<a name="PaperCut+renamePrinter"></a>

### paperCut.renamePrinter(serverName, printerName, newServerName, newPrinterName) ⇒ <code>Promise</code>
Rename a printer.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with undefined, rejects on error  

| Param | Type |
| --- | --- |
| serverName | <code>string</code> | 
| printerName | <code>string</code> | 
| newServerName | <code>string</code> | 
| newPrinterName | <code>string</code> | 

<a name="PaperCut+renameSharedAccount"></a>

### paperCut.renameSharedAccount(currentSharedAccountName, newSharedAccountName) ⇒ <code>Promise</code>
Rename an existing shared account.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with undefined, rejects on error  

| Param | Type |
| --- | --- |
| currentSharedAccountName | <code>string</code> | 
| newSharedAccountName | <code>string</code> | 

<a name="PaperCut+renameUserAccount"></a>

### paperCut.renameUserAccount(currentUserName, newUserName) ⇒ <code>Promise</code>
Rename a user account.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with undefined, rejects on error  

| Param | Type |
| --- | --- |
| currentUserName | <code>string</code> | 
| newUserName | <code>string</code> | 

<a name="PaperCut+resetPrinterCounts"></a>

### paperCut.resetPrinterCounts(serverName, printerName, resetBy) ⇒ <code>Promise</code>
Reset the counts (pages and job counts) associated with a printer.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with undefined, rejects on error  

| Param | Type |
| --- | --- |
| serverName | <code>string</code> | 
| printerName | <code>string</code> | 
| resetBy | <code>string</code> | 

<a name="PaperCut+resetUserCounts"></a>

### paperCut.resetUserCounts(username, resetBy) ⇒ <code>Promise</code>
Reset the counts (pages and job counts) associated with a user account.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with undefined, rejects on error  

| Param | Type |
| --- | --- |
| username | <code>string</code> | 
| resetBy | <code>string</code> | 

<a name="PaperCut+runCommand"></a>

### paperCut.runCommand(commandName, args) ⇒ <code>Promise</code>
Runs a custom command on the server.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with string, rejects on error  

| Param | Type |
| --- | --- |
| commandName | <code>string</code> | 
| args | <code>array</code> | 

<a name="PaperCut+saveThreadSnapshot"></a>

### paperCut.saveThreadSnapshot() ⇒ <code>Promise</code>
Saves the server thread snapshot to the debug log.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with boolean, rejects on error  
<a name="PaperCut+setConfigValue"></a>

### paperCut.setConfigValue(configName, configValue) ⇒ <code>Promise</code>
Set the config value from the server.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with undefined, rejects on error  

| Param | Type |
| --- | --- |
| configName | <code>string</code> | 
| configValue | <code>string</code> | 

<a name="PaperCut+setGroupQuota"></a>

### paperCut.setGroupQuota(groupName, quotaAmount, period, quotaMaxAccumulation) ⇒ <code>Promise</code>
Set the group quota allocation settings on a given group.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with undefined, rejects on error  

| Param | Type |
| --- | --- |
| groupName | <code>string</code> | 
| quotaAmount | <code>double</code> | 
| period | <code>string</code> | 
| quotaMaxAccumulation | <code>double</code> | 

<a name="PaperCut+setPrinterCostSimple"></a>

### paperCut.setPrinterCostSimple(serverName, printerName, costPerPage) ⇒ <code>Promise</code>
Method to set a simple single page cost using the Simple Charging Model.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with undefined, rejects on error  

| Param | Type |
| --- | --- |
| serverName | <code>string</code> | 
| printerName | <code>string</code> | 
| costPerPage | <code>double</code> | 

<a name="PaperCut+setPrinterGroups"></a>

### paperCut.setPrinterGroups(serverName, printerName, printerGroupNames) ⇒ <code>Promise</code>
Set the printer groups a printer belongs to, overwriting any existing group.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with undefined, rejects on error  

| Param | Type |
| --- | --- |
| serverName | <code>string</code> | 
| printerName | <code>string</code> | 
| printerGroupNames | <code>string</code> | 

<a name="PaperCut+setPrinterProperties"></a>

### paperCut.setPrinterProperties(authToken, serverName, printerName, propertyNamesAndValues) ⇒ <code>Promise</code>
Set multiple printer properties at once (to save multiple calls).

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with boolean, rejects on error  

| Param | Type |
| --- | --- |
| authToken | <code>string</code> | 
| serverName | <code>string</code> | 
| printerName | <code>string</code> | 
| propertyNamesAndValues | <code>array</code> | 

<a name="PaperCut+setPrinterProperty"></a>

### paperCut.setPrinterProperty(serverName, printerName, propertyName, propertyValue) ⇒ <code>Promise</code>
Sets a printer property.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with undefined, rejects on error  

| Param | Type |
| --- | --- |
| serverName | <code>string</code> | 
| printerName | <code>string</code> | 
| propertyName | <code>string</code> | 
| propertyValue | <code>string</code> | 

<a name="PaperCut+setSharedAccountAccountBalance"></a>

### paperCut.setSharedAccountAccountBalance(accountName, balance, comment) ⇒ <code>Promise</code>
Set the balance on a shared account to a set value.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with undefined, rejects on error  

| Param | Type |
| --- | --- |
| accountName | <code>string</code> | 
| balance | <code>double</code> | 
| comment | <code>string</code> | 

<a name="PaperCut+setSharedAccountOverdraftMode"></a>

### paperCut.setSharedAccountOverdraftMode(accountName, mode) ⇒ <code>Promise</code>
Set the shared account's overdraft mode

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with undefined, rejects on error  

| Param | Type |
| --- | --- |
| accountName | <code>string</code> | 
| mode | <code>string</code> | 

<a name="PaperCut+setSharedAccountProperties"></a>

### paperCut.setSharedAccountProperties(sharedAccountName, propertyNamesAndValues) ⇒ <code>Promise</code>
Set multiple shared account properties at once (to save multiple calls).

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with undefined, rejects on error  

| Param | Type |
| --- | --- |
| sharedAccountName | <code>string</code> | 
| propertyNamesAndValues | <code>array</code> | 

<a name="PaperCut+setSharedAccountProperty"></a>

### paperCut.setSharedAccountProperty(sharedAccountName, propertyName, propertyValue) ⇒ <code>Promise</code>
Sets a shared account property.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with undefined, rejects on error  

| Param | Type |
| --- | --- |
| sharedAccountName | <code>string</code> | 
| propertyName | <code>string</code> | 
| propertyValue | <code>string</code> | 

<a name="PaperCut+setUserAccountBalance"></a>

### paperCut.setUserAccountBalance(username, balance, comment) ⇒ <code>Promise</code>
Set the balance on a user's account to a set value.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with undefined, rejects on error  

| Param | Type |
| --- | --- |
| username | <code>string</code> | 
| balance | <code>double</code> | 
| comment | <code>string</code> | 

<a name="PaperCut+setUserAccountBalance_2"></a>

### paperCut.setUserAccountBalance\_2(username, balance, comment, accountName) ⇒ <code>Promise</code>
Set the balance on a user's account to a set value.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with undefined, rejects on error  

| Param | Type |
| --- | --- |
| username | <code>string</code> | 
| balance | <code>double</code> | 
| comment | <code>string</code> | 
| accountName | <code>string</code> | 

<a name="PaperCut+setUserAccountBalanceByGroup"></a>

### paperCut.setUserAccountBalanceByGroup(group, balance, comment) ⇒ <code>Promise</code>
Set the balance for each member of a group to the given value.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with undefined, rejects on error  

| Param | Type |
| --- | --- |
| group | <code>string</code> | 
| balance | <code>double</code> | 
| comment | <code>string</code> | 

<a name="PaperCut+setUserAccountBalanceByGroup_2"></a>

### paperCut.setUserAccountBalanceByGroup\_2(group, balance, comment, accountName) ⇒ <code>Promise</code>
Set the balance for each member of a group to the given value.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with undefined, rejects on error  

| Param | Type |
| --- | --- |
| group | <code>string</code> | 
| balance | <code>double</code> | 
| comment | <code>string</code> | 
| accountName | <code>string</code> | 

<a name="PaperCut+setUserAccountSelectionAdvancedPopup"></a>

### paperCut.setUserAccountSelectionAdvancedPopup(username, allowPersonal, chargeToPersonalWhenSharedSelected, defaultSharedAccount) ⇒ <code>Promise</code>
Change a user's account selection setting to use the advanced account selection pop-up.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with undefined, rejects on error  

| Param | Type |
| --- | --- |
| username | <code>string</code> | 
| allowPersonal | <code>boolean</code> | 
| chargeToPersonalWhenSharedSelected | <code>boolean</code> | 
| defaultSharedAccount | <code>string</code> | 

<a name="PaperCut+setUserAccountSelectionAutoChargePersonal"></a>

### paperCut.setUserAccountSelectionAutoChargePersonal(username, withPopupConfirmation) ⇒ <code>Promise</code>
Sets the user to auto charge to it's personal account.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with undefined, rejects on error  

| Param | Type |
| --- | --- |
| username | <code>string</code> | 
| withPopupConfirmation | <code>boolean</code> | 

<a name="PaperCut+setUserAccountSelectionAutoSelectSharedAccount"></a>

### paperCut.setUserAccountSelectionAutoSelectSharedAccount(username, accountName, chargeToPersonal) ⇒ <code>Promise</code>
Change a user's account selection setting to automatically charge to a single shared account.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with undefined, rejects on error  

| Param | Type |
| --- | --- |
| username | <code>string</code> | 
| accountName | <code>string</code> | 
| chargeToPersonal | <code>boolean</code> | 

<a name="PaperCut+setUserAccountSelectionStandardPopup"></a>

### paperCut.setUserAccountSelectionStandardPopup(username, allowPersonal, allowListSelection, allowPinCode, allowPrintingAsOtherUser, chargeToPersonalWhenSharedSelected, defaultSharedAccount) ⇒ <code>Promise</code>
Change a user's account selection setting to use the standard account selection pop-up.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with undefined, rejects on error  

| Param | Type |
| --- | --- |
| username | <code>string</code> | 
| allowPersonal | <code>boolean</code> | 
| allowListSelection | <code>boolean</code> | 
| allowPinCode | <code>boolean</code> | 
| allowPrintingAsOtherUser | <code>boolean</code> | 
| chargeToPersonalWhenSharedSelected | <code>boolean</code> | 
| defaultSharedAccount | <code>string</code> | 

<a name="PaperCut+setUserOverdraftMode"></a>

### paperCut.setUserOverdraftMode(username, mode) ⇒ <code>Promise</code>
Set the user's overdraft mode

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with undefined, rejects on error  

| Param | Type |
| --- | --- |
| username | <code>string</code> | 
| mode | <code>string</code> | 

<a name="PaperCut+setUserProperties"></a>

### paperCut.setUserProperties(userName, propertyNamesAndValues) ⇒ <code>Promise</code>
Set multiple user properties at once (to save multiple calls).

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with undefined, rejects on error  

| Param | Type |
| --- | --- |
| userName | <code>string</code> | 
| propertyNamesAndValues | <code>array</code> | 

<a name="PaperCut+setUserProperty"></a>

### paperCut.setUserProperty(userName, propertyName, propertyValue) ⇒ <code>Promise</code>
Sets a user property.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with undefined, rejects on error  

| Param | Type |
| --- | --- |
| userName | <code>string</code> | 
| propertyName | <code>string</code> | 
| propertyValue | <code>string</code> | 

<a name="PaperCut+syncGroup"></a>

### paperCut.syncGroup(groupName) ⇒ <code>Promise</code>
Syncs an existing group with the configured directory server, updates the group membership.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with boolean, rejects on error  

| Param | Type |
| --- | --- |
| groupName | <code>string</code> | 

<a name="PaperCut+useCard"></a>

### paperCut.useCard(userName, cardNumber) ⇒ <code>Promise</code>
Add the value of the a card to a user's account.

**Kind**: instance method of [<code>PaperCut</code>](#PaperCut)  
**Returns**: <code>Promise</code> - Resolves with string, rejects on error  

| Param | Type |
| --- | --- |
| userName | <code>string</code> | 
| cardNumber | <code>string</code> | 

