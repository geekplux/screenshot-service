const fonts = [
  'NotoSansCJK-Black.ttc',
  'NotoSansCJK-Bold.ttc',
  'NotoSansCJK-DemiLight.ttc',
  'NotoSansCJK-Light.ttc',
  'NotoSansCJK-Medium.ttc',
  'NotoSansCJK-Regular.ttc',
  'NotoSansCJK-Thin.ttc',
  'NotoSansCJK.ttc.zip',
  'NotoSansCJKhk-Black.otf',
  'NotoSansCJKhk-Bold.otf',
  'NotoSansCJKhk-DemiLight.otf',
  'NotoSansCJKhk-Light.otf',
  'NotoSansCJKhk-Medium.otf',
  'NotoSansCJKhk-Regular.otf',
  'NotoSansCJKhk-Thin.otf',
  'NotoSansCJKjp-Black.otf',
  'NotoSansCJKjp-Bold.otf',
  'NotoSansCJKjp-DemiLight.otf',
  'NotoSansCJKjp-Light.otf',
  'NotoSansCJKjp-Medium.otf',
  'NotoSansCJKjp-Regular.otf',
  'NotoSansCJKjp-Thin.otf',
  'NotoSansCJKkr-Black.otf',
  'NotoSansCJKkr-Bold.otf',
  'NotoSansCJKkr-DemiLight.otf',
  'NotoSansCJKkr-Light.otf',
  'NotoSansCJKkr-Medium.otf',
  'NotoSansCJKkr-Regular.otf',
  'NotoSansCJKkr-Thin.otf',
  'NotoSansCJKsc-Black.otf',
  'NotoSansCJKsc-Bold.otf',
  'NotoSansCJKsc-DemiLight.otf',
  'NotoSansCJKsc-Light.otf',
  'NotoSansCJKsc-Medium.otf',
  'NotoSansCJKsc-Regular.otf',
  'NotoSansCJKsc-Thin.otf',
  'NotoSansCJKtc-Black.otf',
  'NotoSansCJKtc-Bold.otf',
  'NotoSansCJKtc-DemiLight.otf',
  'NotoSansCJKtc-Light.otf',
  'NotoSansCJKtc-Medium.otf',
  'NotoSansCJKtc-Regular.otf',
  'NotoSansCJKtc-Thin.otf',
  'NotoSansHK-Black.otf',
  'NotoSansHK-Bold.otf',
  'NotoSansHK-DemiLight.otf',
  'NotoSansHK-Light.otf',
  'NotoSansHK-Medium.otf',
  'NotoSansHK-Regular.otf',
  'NotoSansHK-Thin.otf',
  'NotoSansJP-Black.otf',
  'NotoSansJP-Bold.otf',
  'NotoSansJP-DemiLight.otf',
  'NotoSansJP-Light.otf',
  'NotoSansJP-Medium.otf',
  'NotoSansJP-Regular.otf',
  'NotoSansJP-Thin.otf',
  'NotoSansKR-Black.otf',
  'NotoSansKR-Bold.otf',
  'NotoSansKR-DemiLight.otf',
  'NotoSansKR-Light.otf',
  'NotoSansKR-Medium.otf',
  'NotoSansKR-Regular.otf',
  'NotoSansKR-Thin.otf',
  'NotoSansMonoCJKhk-Bold.otf',
  'NotoSansMonoCJKhk-Regular.otf',
  'NotoSansMonoCJKjp-Bold.otf',
  'NotoSansMonoCJKjp-Regular.otf',
  'NotoSansMonoCJKkr-Bold.otf',
  'NotoSansMonoCJKkr-Regular.otf',
  'NotoSansMonoCJKsc-Bold.otf',
  'NotoSansMonoCJKsc-Regular.otf',
  'NotoSansMonoCJKtc-Bold.otf',
  'NotoSansMonoCJKtc-Regular.otf',
  'NotoSansSC-Black.otf',
  'NotoSansSC-Bold.otf',
  'NotoSansSC-DemiLight.otf',
  'NotoSansSC-Light.otf',
  'NotoSansSC-Medium.otf',
  'NotoSansSC-Regular.otf',
  'NotoSansSC-Thin.otf',
  'NotoSansTC-Black.otf',
  'NotoSansTC-Bold.otf',
  'NotoSansTC-DemiLight.otf',
  'NotoSansTC-Light.otf',
  'NotoSansTC-Medium.otf',
  'NotoSansTC-Regular.otf',
  'NotoSansTC-Thin.otf',
  'NotoSerifCJK-Black.ttc',
  'NotoSerifCJK-Bold.ttc',
  'NotoSerifCJK-ExtraLight.ttc',
  'NotoSerifCJK-Light.ttc',
  'NotoSerifCJK-Medium.ttc',
  'NotoSerifCJK-Regular.ttc',
  'NotoSerifCJK-SemiBold.ttc',
  'NotoSerifCJKjp-Black.otf',
  'NotoSerifCJKjp-Bold.otf',
  'NotoSerifCJKjp-ExtraLight.otf',
  'NotoSerifCJKjp-Light.otf',
  'NotoSerifCJKjp-Medium.otf',
  'NotoSerifCJKjp-Regular.otf',
  'NotoSerifCJKjp-SemiBold.otf',
  'NotoSerifCJKkr-Black.otf',
  'NotoSerifCJKkr-Bold.otf',
  'NotoSerifCJKkr-ExtraLight.otf',
  'NotoSerifCJKkr-Light.otf',
  'NotoSerifCJKkr-Medium.otf',
  'NotoSerifCJKkr-Regular.otf',
  'NotoSerifCJKkr-SemiBold.otf',
  'NotoSerifCJKsc-Black.otf',
  'NotoSerifCJKsc-Bold.otf',
  'NotoSerifCJKsc-ExtraLight.otf',
  'NotoSerifCJKsc-Light.otf',
  'NotoSerifCJKsc-Medium.otf',
  'NotoSerifCJKsc-Regular.otf',
  'NotoSerifCJKsc-SemiBold.otf',
  'NotoSerifCJKtc-Black.otf',
  'NotoSerifCJKtc-Bold.otf',
  'NotoSerifCJKtc-ExtraLight.otf',
  'NotoSerifCJKtc-Light.otf',
  'NotoSerifCJKtc-Medium.otf',
  'NotoSerifCJKtc-Regular.otf',
  'NotoSerifCJKtc-SemiBold.otf',
  'NotoSerifJP-Black.otf',
  'NotoSerifJP-Bold.otf',
  'NotoSerifJP-ExtraLight.otf',
  'NotoSerifJP-Light.otf',
  'NotoSerifJP-Medium.otf',
  'NotoSerifJP-Regular.otf',
  'NotoSerifJP-SemiBold.otf',
  'NotoSerifKR-Black.otf',
  'NotoSerifKR-Bold.otf',
  'NotoSerifKR-ExtraLight.otf',
  'NotoSerifKR-Light.otf',
  'NotoSerifKR-Medium.otf',
  'NotoSerifKR-Regular.otf',
  'NotoSerifKR-SemiBold.otf',
  'NotoSerifSC-Black.otf',
  'NotoSerifSC-Bold.otf',
  'NotoSerifSC-ExtraLight.otf',
  'NotoSerifSC-Light.otf',
  'NotoSerifSC-Medium.otf',
  'NotoSerifSC-Regular.otf',
  'NotoSerifSC-SemiBold.otf',
  'NotoSerifTC-Black.otf',
  'NotoSerifTC-Bold.otf',
  'NotoSerifTC-ExtraLight.otf',
  'NotoSerifTC-Light.otf',
  'NotoSerifTC-Medium.otf',
  'NotoSerifTC-Regular.otf',
  'NotoSerifTC-SemiBold.otf'
];

module.exports = fonts.map(
  font =>
    `https://rawcdn.githack.com/googlefonts/noto-cjk/be6c059ac1587e556e2412b27f5155c8eb3ddbe6/${font}`
);
