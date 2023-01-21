const AccessControl = require("accesscontrol");
const ac = new AccessControl();
 
exports.roles = (function() {
ac.grant("user")
 .readOwn("profile")
 .updateOwn("profile")
 
ac.grant("superadmin")
 .extend("task")
 .readAny("task")
 .updateAny("task")
 .deleteAny("task")
 
return ac;
})();