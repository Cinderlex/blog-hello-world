import {promises as fs} from 'fs';
import path from 'path';

export const getMarkdownArticles = async (): Promise<string[]> => {
    const articlesPath = path.join(process.cwd(), 'articles');
    const articles: string[] = [];
    for (const filename of await fs.readdir(articlesPath)) {
        const articlePath = path.join(articlesPath, filename);
        const article: string = (await fs.readFile(articlePath)).toString();
        articles.push(article);
    }
    return articles;
};
