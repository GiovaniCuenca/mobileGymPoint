import React, {useState, useEffect, useMemo} from 'react';
import {StorageService} from '../services/storage.service';

import api from '../services/api';

import {Actions} from 'react-native-router-flux';

const AuthProvider = props => {
  const [getStudentId, setGetStudentId] = useState('');
  const [getStudent, setGetStudent] = useState('');
  const [isLogged, setIsLogged] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  //Check if ID already stored
  const checkLoggedStudent = async () => {
    try {
      let _studentID = await StorageService.get('gympointStudentId');

      if (await(_studentID !== undefined || null)) {
        setIsLogged(true);
        setGetStudentId(_studentId);
        setIsLoading(false);
      }

      console.log(getStudentId);
    } catch (error) {
      console.log('Erro ao tentar verificar se ID já está registrado');
    }
  };
};

export const { AuthProvider }
