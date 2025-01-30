export interface NotionResponse {
  object: "list";
  results: NotionPage[];
  next_cursor: string | null;
  has_more: boolean;
  type: "page_or_database";
  page_or_database: Record<string, unknown>;
  request_id?: string;
}

export interface NotionPage {
  object: "page";
  id: string;
  created_time: string;
  last_edited_time: string;
  created_by: NotionUser;
  last_edited_by: NotionUser;
  cover: null;
  icon: null;
  parent: {
    type: "database_id";
    database_id: string;
  };
  archived: boolean;
  in_trash: boolean;
  properties: {
    location: NotionRichTextProperty;
    phototype: NotionSelectProperty;
    image: NotionFilesProperty;
    description: NotionRichTextProperty;
    title: NotionTitleProperty;
  };
  url: string;
  public_url: string | null;
}

export interface NotionUser {
  object: "user";
  id: string;
}

export interface NotionRichTextProperty {
  id: string;
  type: "rich_text";
  rich_text: NotionRichTextContent[];
}

export interface NotionRichTextContent {
  type: "text";
  text: {
    content: string;
    link: null;
  };
  annotations: {
    bold: boolean;
    italic: boolean;
    strikethrough: boolean;
    underline: boolean;
    code: boolean;
    color: "default";
  };
  plain_text: string;
  href: null;
}

export interface NotionSelectProperty {
  id: string;
  type: "select";
  select: {
    id: string;
    name: string;
    color: string;
  };
}

export interface NotionFilesProperty {
  id: string;
  type: "files";
  files: NotionFile[];
}

export interface NotionFile {
  name: string;
  type: "file";
  file: {
    url: string;
    expiry_time: string;
  };
}

export interface NotionTitleProperty {
  id: "title";
  type: "title";
  title: NotionRichTextContent[];
}
