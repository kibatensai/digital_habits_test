import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import FolderIcon from '@material-ui/icons/Folder';
import PermMediaIcon from '@material-ui/icons/PermMedia';
import TreeView from '@material-ui/lab/TreeView';
import React, { useEffect, useState } from "react";
import { useActions } from '../../bll/hooks/useActions';
import { useTypedSelector } from "../../bll/hooks/useTypedSelector";
import { IElementStructureItem } from "../../interfaces/interfaces";
import { StyledTreeItem, useStyles } from "../../material-styling/material-styling";
import styling from './FilesExplorer.module.css';

const FilesExplorer = () => {
  // thunks from hook useActions
  const { fetchData, fetchDataById } = useActions()

  // data
  const files = useTypedSelector(state => state.files)

  // an array to check if specific data was fetched or not
  const [arrayCheck, setArrayCheck] = useState<number[]>([])

  // an array to handle folder collapsing with material-ui
  const [expanded, setExpanded] = useState<string[]>(['0']);

  // material-ui styles
  const classes = useStyles();

  // fetching root object with first render
  useEffect(() => {
    fetchData()
  }, [])

  // function with checks if an element needed to be fetched
  const onClickFetch = (neededId: number, neededTitle: string) => {

    if (neededId === 0) rootClick()

    // check if an element is a file and returns from a function if true
    if (neededTitle.split('.').length > 1 || neededTitle === files.title) return

    checkIfFetched(neededId)

    collapseHandler(neededId)

  }

  // function that prevents meaningless queries
  const checkIfFetched = (neededId: number) => {
    if (!arrayCheck.includes(neededId)) {
      setArrayCheck([...arrayCheck, neededId])
      fetchDataById(neededId)
    }
  }

  // updating state for collapses (handling *expanded* attribute of material-ui in render)
  const collapseHandler = (neededId: number) => {
    let str = neededId.toString()

    if (expanded.includes(str)) {
      let newExp = expanded.filter(elem => elem !== str)
      setExpanded([...newExp])
    } else {
      setExpanded([...expanded, str])
    }
  }

  // check if ID is rootID and handle rootID in *expanded* array
  const rootClick = () => {
    if (expanded.includes('0')) {
      let newExp = expanded.filter(elem => elem !== '0')
      setExpanded([...newExp])
    } else {
      setExpanded([...expanded, '0'])
    }
  }

  // recursive custom styled nodes
  const renderTree = (nodes: IElementStructureItem) => {
    let icon = nodes.title.split('.').length > 1 ? PermMediaIcon : FolderIcon
    return <StyledTreeItem bgColor="#e8f0fe" labelIcon={icon}
      key={nodes.id} nodeId={nodes.id.toString()} labelText={nodes.title} onClick={() => onClickFetch(nodes.id, nodes.title)}>
      {Array.isArray(nodes.children) ? nodes.children.map((node) => renderTree(node)) : null}
    </StyledTreeItem>
  };

  return (
    <div className={styling.files_explorer}>
      <TreeView
        expanded={expanded}
        className={classes.root}
        defaultCollapseIcon={<ExpandMoreIcon />}
        defaultExpandIcon={<ChevronRightIcon />}
      >
        {renderTree(files)}
      </TreeView>
    </div>
  );
};

export default FilesExplorer;
