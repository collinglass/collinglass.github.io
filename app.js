"use strict";
var h = Cycle.h;

function main(ext) {
  return {
    DOM: ext.get("DOM", ".myinput", "input")
      .map(function (ev) { return ev.target.value; })
      .startWith("")
      .map(function (name) {
        return h("div", [
          // h("label", "Name:"),
          // h("input.myinput", {attributes: {type: "text"}}),
          h("h1", "Hello, my name is Collin Glass"),
          h("h3", "Let's make things together"),
        ]);
      })
  };
}

Cycle.run(main, {
  DOM: Cycle.makeDOMDriver(".js-container")
});
