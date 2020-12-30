import React from 'react';
import { Grid, Button } from '@material-ui/core';
import { FolderArea } from '../components/FolderArea';
import styles from '../styles/UserTop.module.scss';
import Header from '../components/Header';

const UserTop = () => {
  return (
    <>
      <Header />
      <div className={styles.root}>
        <Grid container justify="center" spacing={5}>
          <Grid item xs={6}>
            <FolderArea />
          </Grid>
          <Grid item xs={2}>
            <Button variant="contained">Create File</Button>
            <span className={styles.mockArea}>SideBar</span>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default UserTop;
