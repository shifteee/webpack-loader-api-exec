const vm = require('vm');

module.exports = function(moduleStr, options = {}, ctx = {}) {
    const context = vm.createContext(ctx);
    const script = new vm.Script(moduleStr, options);

    return script.runInContext(context);
};