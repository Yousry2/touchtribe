import { TestBed } from '@angular/core/testing';

import { LocalStorageService } from './local-storage-service';

describe('LocalStorageServiceService', () => {
     let service: LocalStorageService;

     beforeEach(() => {
          TestBed.configureTestingModule({});
          service = TestBed.inject(LocalStorageService);
     });

     it('should be created', () => {
          expect(service).toBeTruthy();
     });

     it('should set a value in local storage', () => {
          const key = 'testKey';
          const value = 'testValue';
          service.setItem(key, value);
          expect(localStorage.getItem(key)).toEqual(value);
     });

     it('should return the correct value from local storage', () => {
          const key = 'testKey';
          const value = 'testValue';
          localStorage.setItem(key, value);
          expect(service.getItem(key)).toEqual(value);
     });

     it('should correctly set a value with special characters', () => {
          const key = 'testKey';
          const value = 'special!@#$%^&*()_+{}|:"<>?';
          service.setItem(key, value);
          expect(localStorage.getItem(key)).toEqual(value);
     });

     it('should correctly set a large data string', () => {
          const key = 'testKey';
          const value = 'a'.repeat(1000000);
          service.setItem(key, value);
          expect(localStorage.getItem(key)).toEqual(value);
     });

     it('should return null when getting a value with a non-existent key', () => {
          const key = 'nonExistentKey';
          expect(service.getItem(key)).toBeNull();
     });

     it('should not throw an error when removing a value with a non-existent key', () => {
          const key = 'nonExistentKey';
          expect(() => service.removeItem(key)).not.toThrow();
     });

     it('should clear all items from local storage', () => {
          localStorage.setItem('key1', 'value1');
          localStorage.setItem('key2', 'value2');
          localStorage.setItem('key3', 'value3');
          service.clear();
          expect(localStorage.length).toEqual(0);
     });

     it('should not throw an error when clearing an already empty local storage', () => {
          expect(() => service.clear()).not.toThrow();
     });

     it('should remove a specific item from local storage', () => {
          const key = 'testKey';
          const value = 'testValue';
          localStorage.setItem(key, value);
          service.removeItem(key);
          expect(localStorage.getItem(key)).toBeNull();
     });

     it('should handle special characters in key when removing an item from local storage', () => {
          const key = 'special!@#$%^&*()_+{}|:"<>?';
          const value = 'testValue';
          localStorage.setItem(key, value);
          service.removeItem(key);
          expect(localStorage.getItem(key)).toBeNull();
     });
});
