import { Input, AnyColor, RgbaColor, HslaColor, HsvaColor } from "./types";
import { round } from "./helpers";
import { parse } from "./parse";
import { rgbaToHex } from "./colorModels/hex";
import { roundRgba } from "./colorModels/rgb";
import { rgbaToRgbaString } from "./colorModels/rgbString";
import { rgbaToHsla, roundHsla } from "./colorModels/hsl";
import { rgbaToHslaString } from "./colorModels/hslString";
import { rgbaToHsva, roundHsva } from "./colorModels/hsv";
import { changeAlpha } from "./manipulate/changeAlpha";
import { saturate } from "./manipulate/saturate";
import { getBrightness } from "./get/getBrightness";
import { lighten } from "./manipulate/lighten";
import { invert } from "./manipulate/invert";

export class Colord {
  readonly rgba: RgbaColor;

  constructor(input: AnyColor) {
    // Internal color format is RGBA object.
    // We do not round interval RGBA numbers for better conversion accuracy
    this.rgba = parse(input as Input) || { r: 0, g: 0, b: 0, a: 1 };
  }

  /**
   * Returns the brightness of a color (from 0 to 1).
   * The calculation logic is modified from WCAG.
   * https://www.w3.org/TR/AERT/#color-contrast
   */
  public brightness(): number {
    return round(getBrightness(this.rgba), 2);
  }

  /**
   * Same as calling `brightness() < 0.5`.
   */
  public isDark(): boolean {
    return getBrightness(this.rgba) < 0.5;
  }

  /**
   * Same as calling `brightness() >= 0.5`.
   * */
  public isLight(): boolean {
    return getBrightness(this.rgba) >= 0.5;
  }

  /**
   * Returns the hexadecimal representation of a color.
   * When the alpha channel value of the color is less than 1,
   * it outputs #rrggbbaa format instead of #rrggbb.
   */
  public toHex(): string {
    return rgbaToHex(this.rgba);
  }

  /**
   * Converts a color to RGB color space and returns an object.
   * Always includes an alpha value from 0 to 1.
   */
  public toRgb(): RgbaColor {
    return roundRgba(this.rgba);
  }

  /**
   * Converts a color to RGB color space and returns a string representation.
   * Outputs an alpha value only if it is less than 1.
   */
  public toRgbString(): string {
    return rgbaToRgbaString(this.rgba);
  }

  /**
   * Converts a color to HSL color space and returns an object.
   * Always includes an alpha value from 0 to 1.
   */
  public toHsl(): HslaColor {
    return roundHsla(rgbaToHsla(this.rgba));
  }

  /**
   * Converts a color to HSL color space and returns a string representation.
   * Always includes an alpha value from 0 to 1.
   */
  public toHslString(): string {
    return rgbaToHslaString(this.rgba);
  }

  /**
   * Converts a color to HSV color space and returns an object.
   * Always includes an alpha value from 0 to 1.
   */
  public toHsv(): HsvaColor {
    return roundHsva(rgbaToHsva(this.rgba));
  }

  /**
   * Creates a new instance containing an inverted (opposite) version of the color.
   */
  public invert(): Colord {
    return colord(invert(this.rgba));
  }

  /**
   * Increases the HSL saturation of a color by the given amount.
   */
  public saturate(amount = 0.1): Colord {
    return colord(saturate(this.rgba, amount));
  }

  /**
   * Decreases the HSL saturation of a color by the given amount.
   */
  public desaturate(amount = 0.1): Colord {
    return colord(saturate(this.rgba, -amount));
  }

  /**
   * Makes a gray color with the same lightness as a source color.
   */
  public grayscale(): Colord {
    return colord(saturate(this.rgba, -1));
  }

  /**
   * Increases the HSL lightness of a color by the given amount.
   */
  public lighten(amount = 0.1): Colord {
    return colord(lighten(this.rgba, amount));
  }

  /**
   * Increases the HSL lightness of a color by the given amount.
   */
  public darken(amount = 0.1): Colord {
    return colord(lighten(this.rgba, -amount));
  }

  /**
   * Allows to get or change an alpha channel value.
   */
  public alpha(): number;
  public alpha(value: number): Colord;
  public alpha(value?: number): Colord | number {
    if (typeof value === "number") return colord(changeAlpha(this.rgba, value));
    return round(this.rgba.a, 2);
  }
}

/**
 * Parses the given input color and creates a new `Colord` instance.
 * See accepted input formats: https://github.com/omgovich/colord#color-parsing
 */
export const colord = (input: AnyColor | Colord): Colord => {
  if (input instanceof Colord) return input;
  return new Colord(input);
};
