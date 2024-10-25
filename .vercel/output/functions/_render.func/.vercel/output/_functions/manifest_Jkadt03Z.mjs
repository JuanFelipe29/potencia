import 'cookie';
import 'kleur/colors';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_D7td9C1I.mjs';
import 'es-module-lexer';
import { d as decodeKey } from './chunks/astro/server_1QMrkt3O.mjs';
import 'clsx';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///C:/Users/Juan%20Felipe/Documents/personal/front/potencia/","adapterName":"@astrojs/vercel/serverless","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[{"type":"external","value":"/_astro/hoisted.DZT1nSej.js"}],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["C:/Users/Juan Felipe/Documents/personal/front/potencia/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(o,t)=>{let i=async()=>{await(await o())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var s=(i,t)=>{let a=async()=>{await(await i())()};if(t.value){let e=matchMedia(t.value);e.matches?a():e.addEventListener(\"change\",a,{once:!0})}};(self.Astro||(self.Astro={})).media=s;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var l=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let a of e)if(a.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=l;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000noop-middleware":"_noop-middleware.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","C:/Users/Juan Felipe/Documents/personal/front/potencia/node_modules/astro/dist/env/setup.js":"chunks/astro/env-setup_Cr6XTFvb.mjs","\u0000@astrojs-manifest":"manifest_Jkadt03Z.mjs","/astro/hoisted.js?q=0":"_astro/hoisted.DZT1nSej.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/favicon.svg","/_redirects","/css/cardsteam.css","/css/casos_exitos.css","/css/clientes.css","/css/conectate.css","/css/header.css","/css/mainSection.css","/css/styles.css","/Fonts/Gotham-Black.otf","/Fonts/Gotham-Bold.otf","/Fonts/Gotham-Light.otf","/Fonts/Groningen-Bold.ttf","/Fonts/Groningen-Light.ttf","/Fonts/Groningen-Regular.ttf","/Fonts/Tamil Sangam MN.ttc","/images_clientes/bloque29.png","/images_clientes/channels4_profile.jpg","/images_clientes/logo-bid.jpg","/images_clientes/logoBid.png","/images_clientes/metodologiaPotencia.jpeg","/images_clientes/unnamed.png","/images/Fondo Azul.png","/images/fondoQuilla.jpg","/images/imagenEjemplo.png","/images/imagenEjemploVertical.png","/images/Las ciudades y su crecimiento son una POTENCIA infinita..png","/images/metodologiaPotencia-removebg-preview.png","/images/METODOLOGÍA-POTENCIA.png","/images/potenciaAzul.png","/images/potenciaBlanco.png","/images/potenciaNegro.png","/images/potenciaVerde.png","/images/Sin ti╠ütulo-1-02.png","/images/Sin ti╠ütulo-1-03.png","/images/Sin ti╠ütulo-1-04.png","/images/Sin ti╠ütulo-1-06.png","/images/Sin ti╠ütulo-1-08.png","/images/Sin ti╠ütulo-1_Mesa de trabajo 10 .png","/images_exitos/ecoparque-mallorquin.jpg","/images_exitos/malecon_del_rio_noche.jpg","/images_exitos/TGLS-PUERTADEORO-001.jpg","/_astro/hoisted.DZT1nSej.js","/Fotos Potencia/FOTOS MIEMBROS POTENCIA/CarlosNicolella.jpg","/Fotos Potencia/FOTOS MIEMBROS POTENCIA/DavidBlanco.jpg","/Fotos Potencia/FOTOS MIEMBROS POTENCIA/DianaGranados.jpg","/Fotos Potencia/FOTOS MIEMBROS POTENCIA/KaramAmbuita.jpeg","/Fotos Potencia/FOTOS MIEMBROS POTENCIA/LuisMonroy.jpg","/Fotos Potencia/FOTOS MIEMBROS POTENCIA/MiguelCastillo.jpg","/Fotos Potencia/FOTOS MIEMBROS POTENCIA/PedroDLPuente.jpg","/Fotos Potencia/FOTOS MIEMBROS POTENCIA/RamonQuintero.jpg","/Fotos Potencia/FOTOS MIEMBROS POTENCIA/VeronicaDiaz.jpg","/Fotos Potencia/FOTOS MIEMBROS POTENCIA/VivianCabanzo.jpg","/Fotos Potencia/FOTOS SOCIOS EDITADAS/AlbertoBernal.jpg","/Fotos Potencia/FOTOS SOCIOS EDITADAS/CarlosAcosta.jpg","/Fotos Potencia/FOTOS SOCIOS EDITADAS/JorgeGarcia.jpg","/Fotos Potencia/FOTOS SOCIOS EDITADAS/JuanAlvarado.jpg","/Fotos Potencia/FOTOS SOCIOS EDITADAS/RicardoPlata.jpg","/Fotos Potencia/FOTOS SOCIOS EDITADAS/RicardoVives.jpg","/Fotos Potencia/FOTOS MIEMBROS POTENCIA/prueba fotos pequen╠âas/DSC02708.jpg","/Fotos Potencia/FOTOS MIEMBROS POTENCIA/prueba fotos pequen╠âas/DSC02709.jpg","/Fotos Potencia/FOTOS MIEMBROS POTENCIA/prueba fotos pequen╠âas/DSC02712.jpg","/Fotos Potencia/FOTOS MIEMBROS POTENCIA/prueba fotos pequen╠âas/DSC02716.jpg"],"buildFormat":"directory","checkOrigin":false,"serverIslandNameMap":[],"key":"LfScovIuwNfszaS5qQDZhdwH96/H3dV8h8bUwEFlRj8=","experimentalEnvGetSecretEnabled":false});

export { manifest };
