# velora
Velora is a free, feature-rich web text editor library designed for everyone. It provides a flexible and modern editing experience for building powerful text-based applications.







---

Berikut README yang bisa langsung kamu copy dan sesuaikan untuk rilis versi Velora.

---

# Velora

A free and feature-rich web text editor library.

![npm version](https://img.shields.io/npm/v/velora)
![license](https://img.shields.io/npm/l/velora)

## Installation

```bash
npm install velora
```

atau

```bash
yarn add velora
```

atau

```bash
pnpm add velora
```

---

## Quick Start

```ts
import { Velora } from "velora";

const editor = new Velora({
  target: document.getElementById("app"),
  content: "Hello Velora 🚀"
});
```

---

## Features

* Lightweight and fast
* TypeScript support
* Modular architecture
* Customizable UI
* Extensible plugin system

---

## Documentation

Full documentation is available at:

[https://jasakode.github.io/velora/](https://jasakode.github.io/velora/)

---

## Versioning

Velora follows **Semantic Versioning (SemVer)**.

Format:

```
MAJOR.MINOR.PATCH
```

* **MAJOR** → Breaking changes
* **MINOR** → New features (backward compatible)
* **PATCH** → Bug fixes

You can check the current version on npm or in `package.json`.

To release a new version:

```bash
npm version patch   # bug fix
npm version minor   # new feature
npm version major   # breaking change
```

Then publish:

```bash
npm publish
```

---

## Changelog

All notable changes are documented through Git tags and release notes.

To create a release tag:

```bash
git tag v1.0.0
git push origin v1.0.0
```

---

## Contributing

Contributions, issues, and feature requests are welcome.

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

---

## License

MIT License © 2026 Velora

---

Kalau kamu mau, saya juga bisa buatkan versi README yang lebih “library profesional” lengkap dengan section build, development setup, dan contribution guideline yang lebih ketat untuk proyek open-source jangka panjang.
