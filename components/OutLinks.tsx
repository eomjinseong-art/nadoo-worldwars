export function OutLinks({ links }: { links: { href: string; label: string }[] }) {
  if (!links.length) return null;
  return (
    <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-2 text-sm">
      {links.map((link) => {
        const external = link.href.startsWith("http");
        return (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-laurel underline decoration-line underline-offset-4 hover:text-terra"
              {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            >
              {link.label}
            </a>
          </li>
        );
      })}
    </ul>
  );
}
