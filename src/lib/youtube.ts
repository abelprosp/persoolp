/** Extrai o ID do vídeo a partir de URLs comuns do YouTube ou de um ID cru (11 caracteres). */
export function getYouTubeVideoId(raw: string | undefined | null): string | null {
  const s = raw?.trim();
  if (!s) return null;

  if (/^[\w-]{11}$/.test(s)) return s;

  try {
    const url = new URL(/^https?:/i.test(s) ? s : `https://${s}`);
    const host = url.hostname.replace(/^www\./, "");

    if (host === "youtu.be") {
      const id = url.pathname.split("/").filter(Boolean)[0];
      return id && /^[\w-]{11}$/.test(id) ? id : null;
    }

    if (host.endsWith("youtube.com")) {
      if (url.pathname.startsWith("/embed/")) {
        const id = url.pathname.slice(7).split("/")[0];
        return id && /^[\w-]{11}$/.test(id) ? id : null;
      }
      if (url.pathname.startsWith("/shorts/")) {
        const id = url.pathname.slice(8).split("/")[0];
        return id && /^[\w-]{11}$/.test(id) ? id : null;
      }
      const v = url.searchParams.get("v");
      if (v && /^[\w-]{11}$/.test(v)) return v;
    }
  } catch {
    return null;
  }

  return null;
}

export function getYouTubeNocookieEmbedSrc(
  raw: string | undefined | null,
  opts?: { autoplay?: boolean },
): string | null {
  const id = getYouTubeVideoId(raw);
  if (!id) return null;
  const autoplay = opts?.autoplay !== false ? "1" : "0";
  return `https://www.youtube-nocookie.com/embed/${id}?autoplay=${autoplay}&rel=0`;
}
