const postcss = require("postcss");

const plugin = (options = {}) => {
    const decls = {
        selectors: []
    };

    return root => {
        root.walkRules(rule => {
            rule.walkDecls(/transition-/, declaration => {
                !decls[rule.selector] && (decls[rule.selector] = []);
                decls[rule.selector].push({
                    prop: declaration.prop,
                    value: declaration.value
                });

                !decls.selectors.includes(rule.selector) &&
                    decls.selectors.push(rule.selector);

                declaration.remove();
            });

            decls.selectors.includes(rule.selector) &&
                (() => {
                    rule.append({ text: "autoprefixer: off" });
                    decls[rule.selector].forEach(({ prop, value }) => {
                        rule.append({ prop, value });
                    });
                })();

            // TODO: Generate shorthand from transition-* properties per rule.
        });
    };
};

module.exports = postcss.plugin("postcss-ignore-transition-properties", plugin);
