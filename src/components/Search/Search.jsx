import React, { useState, useEffect } from 'react';
import { searchAddress } from '../../apis/api';
import SearchInput from './SearchInput';
import SearchOutputGroup from './SearchOutputGroup';

import { toast, Slide } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Search = ({ onNormalMode }) => {
  const [visible, setVisible] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [results, setResults] = useState([]);

  useEffect(() => {
    setVisible(true);
  }, []);

  const handleClose = (selected) => {
    setVisible(false);
    onNormalMode(selected);
  }

  const handleSearch = async () => {
    try {
      if(searchTerm === '') {
        toast.warn('검색어를 입력해주세요🧐', {
          position: "top-left",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "light",
          transition: Slide,
        });  
        return;
      }
      const result = await searchAddress(searchTerm);
      if(result === null) {
        toast.error('검색에 실패했어요😞', {
          position: "top-left",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "light",
          transition: Slide,
        });  
        return;
      }
      if(result.documents.length === 0) {
        toast.info('검색 결과가 없네요🥹', {
          position: "top-left",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "light",
          transition: Slide,
        });  
        return;
      }

      // filter only if road_address_name starts with '서울' or '경기'
      result.documents = result.documents.filter((doc) => {
        if(doc.road_address_name.substring(0, 2) === '서울' || doc.road_address_name.substring(0, 2) === '경기')
          return doc;
      })

      if(result.documents.length === 0) {
        toast.info('아직은 서울/경기 지역만 가능해요🥹', {
          position: "top-left",
          autoClose: 1500,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: false,
          progress: undefined,
          theme: "light",
          transition: Slide,
        });  
        return;
      }
      
      setResults(result.documents);
    } catch(error) {
      toast.error('오류가 발생했어요😞', {
        position: "top-left",
        autoClose: 1500,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        progress: undefined,
        theme: "light",
        transition: Slide,
      });
    }
  };

  return (
    <div className={`flex flex-col w-full h-full bg-[#9EA9B7] p-6 md:p-8 transition-opacity duration-500 ${visible ? 'opacity-100' : 'opacity-0'}`}>
      <SearchInput
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        onClose={handleClose}
        onSearch={handleSearch}
      />
      <div className="mt-4 flex-grow overflow-auto">
        <SearchOutputGroup results={results} onClose={handleClose} />
      </div>
    </div>
  );
};

export default Search;
