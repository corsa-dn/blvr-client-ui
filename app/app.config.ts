const rounded = "rounded-full";
const min_input_height = "42px";

export default defineAppConfig({
  ui: {
    strategy: "override",

    colors: {
      primary: {
        50: "#ecf1f8",
        100: "#dae3f1",
        200: "#b4c6e4",
        300: "#8faad6",
        400: "#698ec9",
        500: "#4472bb",
        600: "#365b96",
        700: "#294470",
        800: "#1b2d4b",
        900: "#0e1725",
        950: "#09101a",
      },
      // accentPrimary: "#234467",
      // accentSecondary: "#3F75A3",
      // border: "#EBEBEE",
      // backgroundGray: "#F7F8FD",
    },

    primary: "primary",
    gray: "slate",

    button: {
      defaultVariants: {
        color: "accent-primary",
        variant: "solid",
        size: "lg",
      },

      slots: {
        base: [
          `${rounded} cursor-pointer font-semibold //font-bold //tracking-wide min-h-[${min_input_height}]`,
        ],
      },

      variants: {
        variant: {
          // outline with primary text and muted gray border
          "outline-muted": {
            base: `border border-[var(--color-border-color)] text-[var(--color-brand)] bg-transparent hover:bg-[color-mix(in_oklab,var(--color-brand)_8%,transparent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand)]`,
          },
        },

        size: {
          xl: {
            base: [
              `${rounded} text-sm pt-3 pb-3 font-semibold //tracking-wide min-h-[${min_input_height}]`,
            ],
            leadingIcon: "size-4",
          },
        },
      },

      compoundVariants: [
        {
          color: "primary",
          variant: "solid",
          class:
            "text-white bg-[var(--color-brand)] hover:bg-[color-mix(in_oklab,var(--color-brand)_90%,black)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand)]",
        },
        {
          color: "primary",
          variant: "soft",
          class:
            "text-[var(--color-brand)] bg-[color-mix(in_oklab,var(--color-brand)_12%,transparent)] hover:bg-[color-mix(in_oklab,var(--color-brand)_18%,transparent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--color-brand)_25%,transparent)]",
        },
        {
          color: "primary",
          variant: "ghost",
          class:
            "text-[var(--color-brand)] hover:bg-[color-mix(in_oklab,var(--color-brand)_12%,transparent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--color-brand)_25%,transparent)]",
        },
        {
          color: "primary",
          variant: "outline",
          class:
            "border border-[var(--color-brand)] text-[var(--color-brand)] bg-transparent hover:bg-[color-mix(in_oklab,var(--color-brand)_10%,transparent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-brand)]",
        },
        {
          color: "accent-primary",
          variant: "outline",
          class:
            "border border-[var(--color-accent-primary)] text-[var(--color-accent-primary)] bg-transparent hover:bg-[color-mix(in_oklab,var(--color-accent-primary)_10%,transparent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent-primary)]",
        },
        {
          color: "accent-secondary",
          variant: "outline",
          class:
            "border border-[var(--color-accent-secondary)] text-[var(--color-accent-secondary)] bg-transparent hover:bg-[color-mix(in_oklab,var(--color-accent-secondary)_10%,transparent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent-secondary)]",
        },
        {
          color: "white",
          variant: "outline",
          class:
            "border border-white text-white bg-transparent hover:bg-white/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white",
        },
        //

        {
          color: "white",
          variant: "solid",
          class:
            "bg-white text-primary shadow-sm hover:bg-white/90 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary",
        },
        {
          color: "white",
          variant: "ghost",
          class: "text-primary hover:bg-white/80",
        },
        {
          color: "accent-primary",
          variant: "solid",
          class:
            "text-white bg-[var(--color-accent-primary)] hover:bg-[color-mix(in_oklab,var(--color-accent-primary)_90%,black)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent-primary)]",
        },
        {
          color: "accent-secondary",
          variant: "solid",
          class:
            "text-white bg-[var(--color-accent-secondary)] hover:bg-[color-mix(in_oklab,var(--color-accent-secondary)_90%,black)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--color-accent-secondary)]",
        },
        {
          color: "accent-primary",
          variant: "soft",
          class:
            "text-[var(--color-accent-primary)] bg-[color-mix(in_oklab,var(--color-accent-primary)_12%,transparent)] hover:bg-[color-mix(in_oklab,var(--color-accent-primary)_18%,transparent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--color-accent-primary)_25%,transparent)]",
        },
        {
          color: "accent-secondary",
          variant: "soft",
          class:
            "text-[var(--color-accent-secondary)] bg-[color-mix(in_oklab,var(--color-accent-secondary)_12%,transparent)] hover:bg-[color-mix(in_oklab,var(--color-accent-secondary)_18%,transparent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--color-accent-secondary)_25%,transparent)]",
        },
        {
          color: "accent-primary",
          variant: "ghost",
          class:
            "text-[var(--color-accent-primary)] hover:bg-[color-mix(in_oklab,var(--color-accent-primary)_12%,transparent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--color-accent-primary)_25%,transparent)]",
        },
        {
          color: "accent-secondary",
          variant: "ghost",
          class:
            "text-[var(--color-accent-secondary)] hover:bg-[color-mix(in_oklab,var(--color-accent-secondary)_12%,transparent)] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[color-mix(in_oklab,var(--color-accent-secondary)_25%,transparent)]",
        },
      ],
    },

    input: {
      defaultVariants: {
        color: "primary",
        // size: "lg",
        variant: "subtle",
      },
      slots: {
        base: [`${rounded} //tracking-wide min-h-[${min_input_height}]`],
      },
    },

    select: {
      defaultVariants: {
        color: "primary",
        size: "md",
      },
      slots: {
        base: `${rounded} min-h-[${min_input_height}]`,
        content: "rounded-lg p-1",
        item: "rounded-md items-center",
        itemWrapper: "p-1",
      },
    },

    tabs: {
      defaultVariants: {
        color: "primary",
        variant: "pill",
        size: "md",
        orientation: "horizontal",
      },
      slots: {
        list: "bg-elevated min-h-[${min_input_height}] p-1 gap-1",
        trigger: `${rounded}`,
        indicator: `${rounded} text-primary shadow-md font-semibold`,
      },
      variants: {
        variant: {
          pill: {
            list: "rounded-full inset-shadow-xl!  bg-gray-100/50 border-1 border-gray-300/50 shadow-3xl shadow-inner ",
            indicator: `${rounded} shadow-sm  `,
            trigger: `${rounded}`,
          },
        },
      },
    },
  },
});
