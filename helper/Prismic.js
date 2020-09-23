import Prismic from "prismic-javascript";

const prismicApiEndpoint = "https://nextjstestshop.cdn.prismic.io/api/v2";
const prismicAccessToken =
  "MC5YME5VOHhJQUFDUUFPVG5p.77-9Oe-_vVQSFQJy77-9Ue-_vTkz77-9G--_vXHvv71q77-977-977-977-9H--_vWxlag5c77-977-9";

export default Prismic.client(prismicApiEndpoint, {
  accessToken: prismicAccessToken,
});

export const getSimpleClient = () => {
  return Prismic.getApi(prismicApiEndpoint, {
    accessToken: prismicAccessToken,
  });
};

export async function getDocumentByUid(type, uid) {
  const documents = await getSimpleClient()
    .then((api) =>
      api.query(Prismic.Predicates.at(`my.${type}.uid`, uid), { lang: "*" })
    )
    .then((response) => response.results);

  if (!documents.length) return null;

  return documents[0];
}

export async function getDocumentsByTag(tags) {
  const documents = await getSimpleClient()
    .then((api) => api.query(Prismic.Predicates.at("document.tags", tags)))
    .then((response) => response.results);

  return documents;
}

export async function getDocumentsByType(type, options = {}) {
  const documents = await getSimpleClient()
    .then((api) =>
      api.query(Prismic.Predicates.at("document.type", type), options)
    )
    .then((response) => response.results);

  return documents;
}

export async function getStaticPathsByType(type, paramName) {
  const documents = await getSimpleClient()
    .then((api) => api.query(Prismic.Predicates.at("document.type", type)))
    .then((response) => response.results);

  return documents.map((doc) => ({
    params: { [paramName]: doc.uid },
  }));
}
