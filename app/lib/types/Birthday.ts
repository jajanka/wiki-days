export type BirthsResponse = {
  births: Array<BirthItem>;
};

export type BirthItem = {
  text: string;
  pages: Array<{
    type: string;
    title: string;
    displaytitle: string;
    namespace: {
      id: number;
      text: string;
    };
    wikibase_item: string;
    titles: {
      canonical: string;
      normalized: string;
      display: string;
    };
    pageid: number;
    lang: string;
    dir: string;
    revision: string;
    thumbnail?: {
      source: string;
      width: number;
      height: number;
    };
    tid: string;
    timestamp: string;
    description: string;
    description_source: string;
    content_urls: {
      desktop: {
        page: string;
        revisions: string;
        edit: string;
        talk: string;
      };
      mobile: {
        page: string;
        revisions: string;
        edit: string;
        talk: string;
      };
    };
    extract: string;
    extract_html: string;
    normalizedtitle: string;
  }>;
  year: number;
};
