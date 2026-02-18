export const prefixPath = (path: string) => {
    // For GitHub Pages deployment, we need to prefix the repository name.
    // If you are using a custom domain later, you can remove this prefix.
    const isProduction = process.env.NODE_ENV === 'production';
    const basePath = isProduction ? '/sp_portfolio' : '';

    // Ensure we don't double slash and handle external URLs
    if (path.startsWith('http')) return path;

    const normalizedPath = path.startsWith('/') ? path : `/${path}`;
    return `${basePath}${normalizedPath}`;
};
