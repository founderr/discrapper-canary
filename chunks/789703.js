t.d(n, {
  I: function() {
    return a
  }
}), t(789020);
var i = t(442837),
  l = t(509545),
  r = t(55563),
  s = t(551428),
  o = t(73346);

function a(e) {
  let n;
  let t = (0, i.e7)([r.Z], () => r.Z.get(e), [e]),
    a = (0, i.e7)([s.Z], () => s.Z.getForSKU(e), [e]),
    c = (0, i.e7)([l.Z], () => l.Z.getForSKU(e), [e]);
  if (null != t && null != a && null != c) {
    if (null != a.thumbnail) {
      var d, u;
      n = {
        id: a.thumbnail.id,
        filename: a.thumbnail.filename,
        size: a.thumbnail.size,
        url: (0, o._W)(t.applicationId, a.thumbnail, 256),
        mime_type: a.thumbnail.mimeType,
        width: null !== (d = a.thumbnail.width) && void 0 !== d ? d : void 0,
        height: null !== (u = a.thumbnail.height) && void 0 !== u ? u : void 0
      }
    }
    return {
      id: t.id,
      name: t.name,
      description: t.summary,
      image_asset: n,
      application_id: t.applicationId,
      subscription_plans: c.map(e => e.toServerData()),
      published: !!a.published,
      soft_deleted: !!t.deleted,
      store_listing_benefits: a.benefits,
      sku_benefits: {
        id: t.id,
        benefits: []
      },
      sku_flags: t.flags
    }
  }
}