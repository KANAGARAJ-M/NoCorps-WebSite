export const CSP_CONFIG = {
    directives: {
        'default-src': ["'self'"],
        'connect-src': ["'self'", "https://*.supabase.co"],
        'script-src': ["'self'", "'unsafe-inline'", "'unsafe-eval'"],
        'style-src': ["'self'", "'unsafe-inline'"],
        'img-src': ["'self'", "data:", "https:"],
        'frame-src': ["'self'"],
        'font-src': ["'self'", "data:"]
    }
};
// Removed invalid line as it is not valid JavaScript syntax

export const CSP_HEADERS = {
    'Content-Security-Policy': [
        "default-src 'self'",
        "connect-src 'self' https://*.supabase.co",
        "script-src 'self' 'unsafe-inline' 'unsafe-eval'",
        "style-src 'self' 'unsafe-inline'",
        "img-src 'self' data: https:",
        "frame-src 'self'",
        "font-src 'self' data:"
    ].join('; ')
};