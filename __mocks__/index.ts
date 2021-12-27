import { Request, Response, NextFunction } from 'express';

export const req:Request = {
  params: {
    id: '63f71cf0-66ac-11ec-9e1c-df15a5266edc',
  }
} as unknown as Request;

export const res:Response = {} as unknown as Response;

export const successedResponse:Response = {
  status: jest.fn().mockReturnValue(200),
} as unknown as Response;

export const failedResponse:Response = {
  status: 422,
  json: jest.fn().mockReturnValue({
    msg: 'Invalid id request.'
  })
} as unknown as Response;

export const nextFn:NextFunction = jest.fn();
export const express = jest.mock('express');