import type { Plugin } from 'vite'

interface Options {
  name?: string
}

export default function (options: Options = {}): Plugin {
  const {
    name = 'Build',
  } = options
  return {
    name: 'vite:build-date',
    transformIndexHtml: {
      order: 'post',
      handler(html) {
        const target = '</head>'
        const inject = `<script>console.log('%c${name}%c${new Date().toLocaleString()}', 'color:white;background:#41b883;padding:0 4px;', 'color:white;background:#5a5a5a;padding:0 4px;')</script>`
        html = html.replace(target, `${inject}\n${target}`)
        return html
      },
    },
  }
}
