// Place any global data in this file.
// You can import this data from anywhere in your site by using the `import` keyword.

export const SITE_TITLE = "Digital Garden";
export const SITE_DESCRIPTION = "Welcome to my digital garden!";

export const FORCE_DARK_MODE = true;

export const SITE_NAV_ITEMS = [
  { href: "/", label: "home" },
  { href: "/blog", label: "blog" },
  { href: "/photo", label: "photo" },
  { href: "/about", label: "about" },
] as const;

export const HOME_PROFILE = {
  greeting: "Hello",
  name: "Jason Young",
  intro:
    "Crafting calm and fast digital products. This is my personal home base for writing, building, and sharing.",
  roleLabel: "Role",
  roleValue: "Frontend Engineer",
  locationLabel: "Based In",
  locationValue: "Shanghai, China",
  instagramLabel: "Instagram",
  instagramValue: "@handle_or_address",
  reminderLabel: "Reminder",
  reminderValue: "Stay hungry, stay foolish.",
  photosLabel: "Photos",
  photosValue: "Open recent shots",
} as const;
