t.d(n, {
  Z: function() {
return s;
  }
});
var l = t(423875),
  r = t(740605),
  i = t(206583),
  a = t(616922),
  o = t(689938);

function s(e) {
  let n, {
  entry: t
} = e,
{
  provider: s,
  image_url: c
} = t.extra.media,
u = t.extra.artist.name,
d = () => (0, r.o)(a.Hw.ALBUM, t.extra.media.external_parent_id);
  return s === l.p.SPOTIFY && (n = {
type: i.kG.SPOTIFY,
'aria-label': o.Z.Messages.SPOTIFY
  }), {
title: u,
thumbnailUrl: c,
onClickTitle: () => (0, r.o)(a.Hw.ARTIST, t.extra.artist.external_id),
onClickSubtitle: d,
onClickThumbnail: d,
userDescription: o.Z.Messages.MEMBER_LIST_CONTENT_POPOUT_USER_LISTENED,
providerIconProps: n
  };
}