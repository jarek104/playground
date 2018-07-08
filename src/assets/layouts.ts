import { LayoutDefinition } from './../app/models/layout-definition';

export const LAYOUTS: LayoutDefinition[] = [
    {
      majorDividerDirection: 'row',
      primaryMajorPortion: 35,
      primaryMinorPortion: 50,
      minorDividerDirection: 'column',
      thirdPanel: true,
      narrowView: false,
      sidesPadding: 5,
      layoutIcon: '../../assets/layout-icons/layout-1.svg'
    },
    {
      majorDividerDirection: 'column',
      primaryMajorPortion: 50,
      primaryMinorPortion: 50,
      minorDividerDirection: 'row',
      thirdPanel: true,
      narrowView: false,
      sidesPadding: 10,
      layoutIcon: '../../assets/layout-icons/layout-2.svg'
    },
    {
      majorDividerDirection: 'row',
      primaryMajorPortion: 60,
      primaryMinorPortion: 50,
      minorDividerDirection: 'row',
      thirdPanel: true,
      narrowView: false,
      sidesPadding: 0,
      layoutIcon: '../../assets/layout-icons/layout-3.svg'
    },
    {
      majorDividerDirection: 'row',
      primaryMajorPortion: 50,
      primaryMinorPortion: 0,
      minorDividerDirection: undefined,
      thirdPanel: false,
      narrowView: false,
      sidesPadding: 5,
      layoutIcon: '../../assets/layout-icons/layout-4.svg'
    },
    {
      majorDividerDirection: 'column',
      primaryMajorPortion: 50,
      primaryMinorPortion: 0,
      minorDividerDirection: undefined,
      thirdPanel: false,
      narrowView: false,
      sidesPadding: 10,
      layoutIcon: '../../assets/layout-icons/layout-5.svg'
    },
  ];