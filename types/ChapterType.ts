interface ChapterType {
  id: number;
  versesCount: number;
  bismillahPre: boolean;
  revelationOrder: number;
  revelationPlace: string;
  pages: Array<number>;
  nameComplex: string;
  nameSimple: string;
  nameArabic: string;
  chapterNumber: number;
  translatedName: string;
  languageName: string;
}

export default ChapterType;
