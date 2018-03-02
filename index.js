const { NodeVM } = require('vm2');

module.exports = function(moduleStr, options = {}, ctx = {}) {
    const vm = new NodeVM( Object.assign({}, options, { sandbox: ctx }) );

    return vm.run(moduleStr);
};
