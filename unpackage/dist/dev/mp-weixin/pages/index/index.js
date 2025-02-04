"use strict";
const common_vendor = require("../../common/vendor.js");
const common_assets = require("../../common/assets.js");
const _sfc_main = {};
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_dateformat2 = common_vendor.resolveComponent("uni-dateformat");
  const _easycom_common_title2 = common_vendor.resolveComponent("common-title");
  (_easycom_uni_icons2 + _easycom_uni_dateformat2 + _easycom_common_title2)();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_dateformat = () => "../../uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.js";
const _easycom_common_title = () => "../../components/common-title/common-title.js";
if (!Math) {
  (_easycom_uni_icons + _easycom_uni_dateformat + _easycom_common_title)();
}
function _sfc_render(_ctx, _cache) {
  return {
    a: common_assets._imports_0,
    b: common_assets._imports_0,
    c: common_vendor.p({
      type: "sound-filled",
      size: "20"
    }),
    d: common_vendor.f(4, (item, k0, i0) => {
      return {};
    }),
    e: common_vendor.p({
      type: "right",
      size: "20",
      color: "black"
    }),
    f: common_vendor.p({
      type: "calendar",
      size: "18"
    }),
    g: common_vendor.p({
      date: Date.now(),
      format: "MM月d日"
    }),
    h: common_vendor.f(8, (item, k0, i0) => {
      return {};
    }),
    i: common_assets._imports_0
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1cf27b2a"]]);
wx.createPage(MiniProgramPage);
