import React, { useState, setState, useReducer, reset, useEffect } from "react";
import axios from 'axios'
import useApplicationData from '../hooks/useApplicationData'
import {
  UPDATE_FAVOURITE_DATA, UPDATE_COMMENT_DATA, UPDATE_LIKES_DATA
} from '../reducer/data_reducer';
