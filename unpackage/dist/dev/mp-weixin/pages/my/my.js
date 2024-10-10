"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
function _sfc_render(_ctx, _cache) {
  return {
    a: common_assets._imports_0,
    b: common_vendor.f(3, (item, k0, i0) => {
      return {
        a: "2f1ef635-0-" + i0,
        b: "2f1ef635-1-" + i0
      };
    }),
    c: common_vendor.p({
      type: "download-filled",
      size: "30"
    }),
    d: common_vendor.p({
      type: "right",
      size: "30"
    }),
    e: common_vendor.f(3, (item, k0, i0) => {
      return {
        a: "2f1ef635-2-" + i0,
        b: "2f1ef635-3-" + i0
      };
    }),
    f: common_vendor.p({
      type: "download-filled",
      size: "30"
    }),
    g: common_vendor.p({
      type: "right",
      size: "30"
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-2f1ef635"]]);
wx.createPage(MiniProgramPage);
