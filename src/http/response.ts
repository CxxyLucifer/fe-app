export interface BetaBaseResponse<T> {
    redirect?: boolean;
    code: number;
    obj?: T;
    data?: T;
    success: boolean;
    msg: string;
}
export interface BetaSuccessResponse<T> extends BetaBaseResponse<T> {
    success: true;
    obj: T;
    data?: T;
}
// @ts-ignore
export interface BetaFailedResponse extends BetaBaseResponse<null> {
    success: false;
    obj: null;
    data: null;
}

export type PageData<T> = {
    pageNo: number;

    pageSize: number;

    totalPages: number;

    totalRecords: number;
    
    list: T[];
};