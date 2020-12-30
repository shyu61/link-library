import React from 'react';
import { TreeView, TreeItem } from '@material-ui/lab';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import FolderIcon from '@material-ui/icons/Folder';
import InsertDriveFileIcon from '@material-ui/icons/InsertDriveFile';
import styles from '../styles/UserTop.module.scss';

export const FolderArea = () => {
  return (
    <>
      <div className={styles.header}>
        <AccountCircleIcon className={styles.avatar} />
        <span>UserName / </span>
        <span>TimeStamp</span>
      </div>
      <div className={styles.container}>
        <TreeView defaultCollapseIcon={<ExpandMoreIcon />} defaultExpandIcon={<ChevronRightIcon />}>
          <TreeItem nodeId="1" label="Applications">
            <FolderIcon />
            <TreeItem nodeId="2" label="hoge" />
            <InsertDriveFileIcon />
            <TreeItem nodeId="3" label="foo" />
          </TreeItem>
        </TreeView>
      </div>
    </>
  );
};
