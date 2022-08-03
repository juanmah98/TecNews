export interface NoticiasAPI {
    status:       string;
    totalResults: number;
    articles:     Article[];
}

export interface Article {
    source:      Source;
    author:      string;
    title:       string;
    description: string;
    url:         string;
    urlToImage:  string;
    publishedAt: Date;
    content:     null;
}

export interface Source {
    id:   string;
    name: string;
}
