var r = n(524437),
  i = n(163268),
  a = n(82554),
  s = n(689938);
let o = {
  title: () => s.Z.Messages.IAR_UPSELLS_SENSITIVE_MEDIA_TITLE,
  description: () => s.Z.Messages.IAR_UPSELLS_SENSITIVE_MEDIA_DESCRIPTION,
  eligibleReportSubtypes: [
a.i5.SUB_CSAM,
a.i5.SUB_LOLI,
a.i5.SUB_NCP,
a.i5.SUB_SEXUALLY_DEGRADING_CONTENT,
a.i5.SUB_UNSOLICITED_PORN
  ],
  onApply: () => {
let {
  explicitContentGuilds: e,
  explicitContentFriendDm: t,
  explicitContentNonFriendDm: n
} = (0, i.l4)();
(0, i.zj)({
  explicitContentGuilds: e === r.Q4.SHOW ? r.Q4.BLUR : void 0,
  explicitContentFriendDm: t === r.Q4.SHOW ? r.Q4.BLUR : void 0,
  explicitContentNonFriendDm: n === r.Q4.SHOW ? r.Q4.BLUR : void 0
});
  },
  usePredicate: () => {
let {
  explicitContentGuilds: e,
  explicitContentFriendDm: t,
  explicitContentNonFriendDm: n
} = (0, i.l4)();
return e === r.Q4.SHOW || t === r.Q4.SHOW || n === r.Q4.SHOW;
  }
};
t.Z = o;