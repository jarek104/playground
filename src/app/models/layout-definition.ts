export interface LayoutDefinition {
    majorDividerDirection: 'column' | 'row';
    primaryMajorPortion: number;
    primaryMinorPortion: number;
    minorDividerDirection: 'column' | 'row' | undefined;
    thirdPanel: boolean;
    sidesPadding: number;
    layoutIcon: string;
}
