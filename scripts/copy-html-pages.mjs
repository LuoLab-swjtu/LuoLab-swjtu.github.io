import { copyFile } from 'node:fs/promises'
import { resolve } from 'node:path'

const distDir = resolve('dist')
const indexHtml = resolve(distDir, 'index.html')
const pages = ['research.html', 'team.html', 'publications.html', 'contact.html', '404.html']

await Promise.all(pages.map((page) => copyFile(indexHtml, resolve(distDir, page))))
