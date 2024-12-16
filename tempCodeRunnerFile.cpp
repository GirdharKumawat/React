//{ Driver Code Starts
#include <bits/stdc++.h>
using namespace std;


// } Driver Code Ends
class Solution {

  public:
    int minCoins(vector<int> &coins, int sum) {
        // Ysorting the coins array,in descending order
        sort(coins.begin(), coins.end(),greater<int>());
        int i=0;
        int count=0;
        while(sum>0){
           if(sum>=coins[i])
              {
                sum-=coins[i];
                cout<<coins[i]<<" ";
                count++;
              }
              else
              {
                i++;
              }
            
        }
        cout<<endl;
        return 0;
    }
};

//{ Driver Code Starts.

int main() {
    string ts;
    getline(cin, ts);
    int t = stoi(ts);
    while (t--) {
        string ks;
        getline(cin, ks);
        int k = stoi(ks);
        vector<int> arr;
        string input;
        getline(cin, input);
        stringstream ss(input);
        int number;
        while (ss >> number) {
            arr.push_back(number);
        }
        Solution obj;
        int res = obj.minCoins(arr, k);
        cout << res << endl;
        cout << "~" << endl;
    }
    return 0;
}

// } Driver Code Ends