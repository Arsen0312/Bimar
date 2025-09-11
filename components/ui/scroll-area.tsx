import * as React from "react"
import * as ScrollAreaPrimitive from "@radix-ui/react-scroll-area"
import { cn } from "@/lib/utils"

const ScrollArea = React.forwardRef<
    React.ElementRef<typeof ScrollAreaPrimitive.Root>,
    React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Root>
>(({ className, children, ...props }, ref) => (
    <ScrollAreaPrimitive.Root
        ref={ref}
        type="hover"               // показывать скроллбар только при наведении
        className={cn("relative overflow-hidden", className)}
        {...props}
    >
    <ScrollAreaPrimitive.Viewport className="h-full w-full rounded-[inherit]">
        {children}
    </ScrollAreaPrimitive.Viewport>

    {/* Вертикальный скроллбар */}
    <ScrollBar orientation="vertical" />
    {/* Горизонтальный — если нужен, раскомментируй: */}
    {/* <ScrollBar orientation="horizontal" /> */}

      <ScrollAreaPrimitive.Corner />
    </ScrollAreaPrimitive.Root>
))
ScrollArea.displayName = ScrollAreaPrimitive.Root.displayName

const ScrollBar = React.forwardRef<
    React.ElementRef<typeof ScrollAreaPrimitive.Scrollbar>,
    React.ComponentPropsWithoutRef<typeof ScrollAreaPrimitive.Scrollbar>
>(({ className, orientation = "vertical", ...props }, ref) => (
    <ScrollAreaPrimitive.Scrollbar
        ref={ref}
        orientation={orientation}
        className={cn(
            // размеры и позиционирование
            "flex touch-none select-none transition-colors",
            "data-[orientation=vertical]:w-2 data-[orientation=vertical]:right-0.5",
            "data-[orientation=horizontal]:h-2 data-[orientation=horizontal]:bottom-0.5",
            // стили внешнего вида
            "data-[orientation=vertical]:py-1",
            "data-[orientation=horizontal]:px-1",
            className
        )}
        {...props}
    >
      {/* «ползунок» */}
      <ScrollAreaPrimitive.Thumb
          className={cn(
              "relative flex-1 rounded-full",
              "bg-[#DD2B1C]",                                          // красный ползунок
              "opacity-60 hover:opacity-100",                          // полупрозрачный с ховером
              // чтобы было легче схватить
              "before:absolute before:content-[''] before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:-translate-y-1/2",
              "before:h-full before:min-h-[44px] before:w-full before:min-w-[8px]"
          )}
      />
    </ScrollAreaPrimitive.Scrollbar>
))
ScrollBar.displayName = ScrollAreaPrimitive.Scrollbar.displayName

export { ScrollArea, ScrollBar }
