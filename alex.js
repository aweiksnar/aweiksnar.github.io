goog.addDependency("base.js", ['goog'], []);
goog.addDependency("../cljs/core.js", ['cljs.core'], ['goog.string', 'goog.object', 'goog.string.StringBuffer', 'goog.array']);
goog.addDependency("../dommy/utils.js", ['dommy.utils'], ['cljs.core']);
goog.addDependency("../clojure/string.js", ['clojure.string'], ['goog.string', 'cljs.core', 'goog.string.StringBuffer']);
goog.addDependency("../dommy/attrs.js", ['dommy.attrs'], ['cljs.core', 'dommy.utils', 'clojure.string']);
goog.addDependency("../dommy/template.js", ['dommy.template'], ['cljs.core', 'dommy.attrs', 'dommy.utils', 'clojure.string']);
goog.addDependency("../dommy/core.js", ['dommy.core'], ['dommy.template', 'cljs.core', 'dommy.attrs', 'dommy.utils', 'clojure.string']);
goog.addDependency("../alex/core.js", ['alex.core'], ['cljs.core', 'dommy.core', 'dommy.utils']);