import * as React from 'react';

export interface TreeData {
  key: string;
  value: string;
  label: React.ReactNode;
  children?: Array<TreeData>;
}

export interface TreeSelectProps {
  style?: React.CSSProperties;
  value?: string | Array<any>;
  defaultValue?: string | Array<any>;
  multiple?: boolean;
  tags?: boolean;
  onSelect?: (value: any) => void;
  onChange?: (value: any, label: any) => void;
  allowClear?: boolean;
  onSearch?: (value: any) => void;
  placeholder?: string;
  searchPlaceholder?: string;
  dropdownStyle?: React.CSSProperties;
  dropdownMatchSelectWidth?: boolean;
  combobox?: boolean;
  size?: 'large' | 'small';
  showSearch?: boolean;
  disabled?: boolean;
  treeDefaultExpandAll?: boolean;
  treeCheckable?: boolean | React.ReactNode;
  filterTreeNode?: (treeNode: any) => boolean;
  treeNodeFilterProp?: string;
  treeNodeLabelProp?: string;
  treeData?: Array<TreeData>;
  treeDataSimpleMode?: boolean;
  loadData?: (node: any) => void;
  showCheckedStrategy?: 'SHOW_ALL' | 'SHOW_PARENT' | 'SHOW_CHILD';
  className?: string;
  prefixCls?: string;
  notFoundContent?: React.ReactNode;
}

export interface TreeSelectContext {
  antLocale?: {
    Select?: any,
  };
}
